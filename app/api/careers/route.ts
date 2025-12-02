import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const city = formData.get("city") as string
    const message = formData.get("message") as string
    const resume = formData.get("resume") as File | null

    if (!name || !email || !phone || !city || !resume) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File size must be less than 5MB" }, { status: 400 })
    }

    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json({ error: "Invalid file type. Please upload PDF, DOC, or DOCX" }, { status: 400 })
    }

    const resumeBuffer = await resume.arrayBuffer()
    const resumeBase64 = Buffer.from(resumeBuffer).toString("base64")

    const applicationData = {
      name,
      email,
      phone,
      city,
      message: message || "",
      resume: {
        filename: resume.name,
        type: resume.type,
        size: resume.size,
        data: resumeBase64,
      },
      submittedAt: new Date().toISOString(),
    }

    console.log("Career application received:", {
      name,
      email,
      phone,
      city,
      messageLength: message?.length || 0,
      resumeFilename: resume.name,
      resumeSize: resume.size,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing career application:", error)
    return NextResponse.json({ error: "Failed to process application" }, { status: 500 })
  }
}


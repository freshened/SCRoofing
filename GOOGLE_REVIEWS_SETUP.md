# Google Reviews Widget Setup Guide

## Step 1: Get Your Google Places API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a New Project** (or select existing one)
   - Click the project dropdown at the top
   - Click "New Project"
   - Name it (e.g., "Stuart Conrad Roofing Website")
   - Click "Create"

3. **Enable Places API**
   - Go to "APIs & Services" > "Library" in the left sidebar
   - Search for "Places API"
   - Click on it and press "Enable"

4. **Create API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "+ CREATE CREDENTIALS" > "API key"
   - Copy your API key (you'll need it in Step 3)

5. **Set Up Billing** (Required)
   - Go to "Billing" in the left sidebar
   - Set up a billing account
   - Note: Google gives $200/month free credit, which covers most usage

6. **Restrict Your API Key** (Recommended)
   - In Credentials, click on your API key
   - Under "Application restrictions", select "HTTP referrers"
   - Add your website domain (e.g., `https://stuartconradroofing.com/*`)
   - Under "API restrictions", select "Restrict key" and choose "Places API"
   - Click "Save"

## Step 2: Find Your Google Place ID

1. **Method 1: Using Google Maps**
   - Search for "Stuart Conrad Roofing" on Google Maps
   - Click on your business listing
   - Look at the URL - it will contain something like `?cid=123456789` or `place_id=ChIJ...`
   - Or use the Place ID Finder tool below

2. **Method 2: Using Place ID Finder**
   - Visit: https://developers.google.com/maps/documentation/places/web-service/place-id
   - Use the tool in the page to search for your business
   - Enter your business name and address
   - Copy the Place ID (looks like: `ChIJN1t_tDeuEmsRUsoyG83frY4`)

## Step 3: Configure Environment Variables

1. **Create `.env.local` file** in your project root (same folder as `package.json`)

2. **Add these lines:**
   ```
   GOOGLE_PLACES_API_KEY=your_actual_api_key_here
   GOOGLE_PLACE_ID=your_actual_place_id_here
   ```

3. **Example:**
   ```
   GOOGLE_PLACES_API_KEY=AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz1234567
   GOOGLE_PLACE_ID=ChIJN1t_tDeuEmsRUsoyG83frY4
   ```

4. **Important:** Never commit `.env.local` to git (it's already in `.gitignore`)

## Step 4: Restart Your Dev Server

After adding the environment variables:
1. Stop your dev server (Ctrl+C)
2. Start it again: `npm run dev`
3. The widget will now fetch real reviews from Google!

## Troubleshooting

- **"Google Places API not configured"**: Make sure `.env.local` exists and has both variables
- **API errors**: Check that Places API is enabled in Google Cloud Console
- **No reviews showing**: Verify your Place ID is correct and your business has Google reviews
- **Billing errors**: Make sure billing is set up in Google Cloud Console

## Cost Information

- Google Places API offers $200/month free credit
- Place Details API (which we use) costs $17 per 1,000 requests
- With caching (1 hour), typical usage is very low cost
- Most small websites stay well within the free tier


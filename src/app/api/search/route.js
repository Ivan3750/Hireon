export async function GET(req) {
    try {
      const response = await fetch(
        `https://api.adzuna.com/v1/api/jobs/${new URL(req.url).searchParams.get('country').toLowerCase() || 'us'}/search/1?app_id=${
        process.env.NEXT_PUBLIC_ADZUNA_ID
      }&app_key=${process.env.NEXT_PUBLIC_ADZUNA_KEY}&what=${new URL(req.url).searchParams.get('what') || ''}&where=${new URL(req.url).searchParams.get('where') || ''}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      console.log(new URL(req.url).searchParams.get('what'), new URL(req.url).searchParams.get('where'))
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
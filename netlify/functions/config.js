exports.handler = async function(event, context) {
  const config = {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_KEY,
  };

  if (!config.supabaseUrl || !config.supabaseKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server configuration missing.' })
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(config)
  };
};

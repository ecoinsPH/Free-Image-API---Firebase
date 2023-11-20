const GET = (req, res) => {
  const html = `
    <div style="height: 100vh; display: flex; align-items: center; justify-content: center;">
        <h1 style="font-family: 'Arial', sans-serif; color: #292929">Tyler's FREE Image API :D Needs key auth tho :P.....<a href="/upload">/upload</a></h1>
    </div>
    `;
  res.send(html);
};

export default GET;

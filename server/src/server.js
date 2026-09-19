const express = require('express');
const app=express();
const PORT=5000;
app.use(express.json());
app.get('/api/health', (req,res)=>{ res.json({ 
    status: 'ok',
    message:"server is running"
});
});
app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
})
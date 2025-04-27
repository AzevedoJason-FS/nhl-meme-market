const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/api/blog", async (req, res) => {
  try {
    let { data, error } = await supabase.from("blog").select("*");
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching blog article:", error.message);
    res.status(500).json({ error: "Error fetching blog articles" });
  }
});

app.get("/api/blog/categories", async (req, res) => {
  try {
    const { data, error } = await supabase.from('unique_categories').select('*')
    if (error) throw error;
    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "category not found" });
    }
  } catch (error) {
    console.error("Error fetching category:", error.message);
    res.status(500).json({ error: "Error fetching category" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

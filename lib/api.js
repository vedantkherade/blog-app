const BASE_URL = "https://api.slingacademy.com/v1/sample-data/blog-posts";

export async function getBlogs(page = 1) {
  try {
    const limit = 9;
    const offset = (page - 1) * limit;

    const res = await fetch(`${BASE_URL}?offset=${offset}&limit=${limit}`, {
      cache: "no-store",
    });

    const contentType = res.headers.get("content-type");

 
    if (!res.ok || !contentType?.includes("application/json")) {
      console.error("Invalid response from API");
      return [];
    }

    const data = await res.json();
    return data.blogs || [];
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
}

export async function getBlogById(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      cache: "no-store",
    });

    const contentType = res.headers.get("content-type");


    if (!res.ok || !contentType?.includes("application/json")) {
      console.error("Invalid blog response");
      return null;
    }

    const data = await res.json();
    return data.blog || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
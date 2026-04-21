import { GRAPHCMS_TOKEN, GRAPHCMS_URL } from "@/config/settings.server";

/**
 * @name fetchFromGraphCMS
 * @external https://css-tricks.com/raw-graphql-querying
 * @description This function is used to fetch data from the GraphQL API.
 * Check out the link above for more information.
 */
export const fetchFromGraphCMS = async <T>(query: string, variables?: Record<string, any>): Promise<{ data: T }> => {
  const body: any = { query };

  if (variables) {
    body.variables = variables;
  }

  if (!GRAPHCMS_URL || GRAPHCMS_URL === "__undefined__") {
    console.error("Hygraph Error: GRAPHCMS_URL is not defined in environment variables.");
  }

  if (!GRAPHCMS_TOKEN || GRAPHCMS_TOKEN === "__undefined__") {
    console.error("Hygraph Error: GRAPHCMS_TOKEN is not defined in environment variables.");
  }

  try {
    const res = await fetch(GRAPHCMS_URL, {
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${GRAPHCMS_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      cache: "force-cache",
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Hygraph Error: Fetch failed with status ${res.status}`, {
        url: GRAPHCMS_URL,
        status: res.status,
        statusText: res.statusText,
        response: errorText,
      });
      throw new Error(`Hygraph fetch failed: ${res.statusText}`);
    }

    const json = await res.json();

    if (json.errors) {
      console.error("Hygraph GraphQL Errors:", JSON.stringify(json.errors, null, 2));
    }

    return json;
  } catch (error) {
    console.error("Hygraph Error: Unexpected error during fetch", error);
    throw error;
  }
};

export const gql = String.raw;

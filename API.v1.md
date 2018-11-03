**API Specification**
----

* **[Add Organisation](#add-organisation)**
* **[Get Organisation](#get-organisation)**

**Add Organisation**
----
  Add a hierarchy of organisations.

* **URL**

  `/api/v1/organisations`

* **Method:**

  `POST`

*  **URL Params**

   * None

* **Data Params**

   * **Mandatory:**
     * `org_name=[string]`, organisation name

   * **Optional:**
     * `daughters=[array]`, daughters of this organisation with same data structure in a hierarchy

* **Success Response:**

  * **Code:** 201 CREATED <br />

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "message" : "<error message>" }` <br />


**Get Organisation**
----
  Get all parents, sisters and daughters of given organisation sorted by name.

* **URL**

  `/api/v1/organisations`

* **Method:**

  `GET`

*  **URL Params**

   * **Mandatory:**
     * `org_name=[string]`, organisation name

   * **Optional:**
     * `next=[string]`, the last organisation name of previous page

* **Data Params**

   * None

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** `[ { "relationship_type": "parent", "org_name": "Banana tree" }, { "relationship_type": "sister", "org_name": "Brown Banana" } ]`

* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "message" : "<error message>" }` <br />

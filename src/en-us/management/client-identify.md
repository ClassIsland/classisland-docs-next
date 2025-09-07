# Client Identification

You can assign a custom ID to each ClassIsland instance to identify it. The custom ID can be set to something easy to recognize, such as a class name or classroom number.

In addition to the custom ID, ClassIsland also generates a unique Client ID (CUID) for each instance.

These identifiers can be included in the URL when accessing centralized management configuration data. For details, see [URL Template](configure.md#url-template)。

<a id="url-template"></a>

## URL Template

When calling URLs in the centralized management manifest, ClassIsland can fill in client information into the URL template, allowing each ClassIsland instance to be assigned specific objects.

ClassIsland supports the following templates:

| Template | Description |
| -- | -- |
| `{id}` | The client’s ID |
| `{cuid}` | The client’s unique Client ID |

When making requests, the templates in the URL will be directly replaced with the corresponding values. For example:

``` plaintext
https://example.com/client/{id}/policy.json -> https://example.com/client/TEST_ID/policy.json
https://example.com/client/{cuid}/policy.json -> https://example.com/client/9f5ab079-83c7-aeba-db2f-db39a0009845/policy.json
```

# Centralized Management Configuration File

Reference documentation for ClassIsland centralized management configuration files.

## Table of Contents

### Types

| Type | Description |
| -- | -- |
| [`ReVersionString`](#reversionstring) | A type that stores a string along with its version information. |

### Configuration Files

| File | Description |
| -- | -- |
| [Management Configuration](#mgmt-configure) | Client configuration for centralized management. Stores information such as management server/manifest URLs. |
| [Management Manifest](#mgmt-manifest) | Contains information about centralized management files to be fetched, as well as organizational info. |
| [Policy File](#mgmt-policy) | Controls various ClassIsland behaviors. |
| Application Settings | Settings of ClassIsland. |
| [Timetable, Time Layout, and Subject Files](#mgmt-profile) | Files that store timetable, time layout, and subject information. |

<a id="ReVersionString"></a>

## ReVersionString

`ReVersionString` is a type that stores a string along with its version information.

### Members

| Property | Type | Required? | Description | Example |
| -- | -- | -- | -- | -- |
| `Version` | `int` | **Yes** | Version number of the string | `1` |
| `Value` | `string?` | No | String content | `Hello world!` |

### Example

```json
{
    "Version": 1,
    "Value": "Hello world!"
}
```

<a id="mgmt-configure"></a>

## Management Configuration

Client configuration for centralized management. Stores information such as management server/manifest URLs.

### 属性

| Property | Type | Required? | Description | Example |
| -- | -- | -- | -- | -- |
| `ManagementServerKind` | `int` | **Yes** | Type of management server. (`0`: statically hosted configuration file; `1`: management server) | `0` |
| `ManagementServer` | `string` | Yes if `ManagementServerKind` is 1 | Management server address | `https://example.com:23333` |
| `ManagementServerGrpc` | `string` | Yes if `ManagementServerKind` is 1 | Management server gRPC address | `https://example.com:23333` |
| `ManifestUrlTemplate` | `string` | Yes if `ManagementServerKind` is 0 | Manifest URL template | `https://example.com/manifest.json` |
| `ClassIdentity` | `string` | No | Class Identifier | `1-101` |

### Example

```json
{
    "ManagementServerKind": 0,
    "ManagementServer": "",
    "ManagementServerGrpc": "",
    "ManifestUrlTemplate": "https://example.com/manifest.json",
    "ClassIdentity": "TEST"
}
```

<a id="mgmt-manifest"></a>

## Management Manifest

Contains information about centralized management files to be fetched, as well as organizational details.

If you are manually modifying this file, be sure to update the version number of any `ReVersionString` properties after editing them. Otherwise, ClassIsland instances may not update the corresponding information.

### 属性

| Property | Type | Required? | Description | Example |
| -- | -- | -- | -- | -- |
| `ServerKind` | `int` | **Yes** | Server type (`0`: statically hosted configuration file; `1`: management server) | `0` |
| `OrganizationName` | `string` | No | Organization name | `⌈黑塔⌋空间站` |
| `ClassPlanSource` | [`ReVersionString`](#ReVersionString) | No | Timetable file URL template | -- |
| `TimeLayoutSource` | [`ReVersionString`](#ReVersionString) | No | Time layout file URL template | -- |
| `SubjectsSource` | [`ReVersionString`](#ReVersionString) | No | Subject file URL template | -- |
| `DefaultSettingsSource` | [`ReVersionString`](#ReVersionString) | No | Application settings URL template | -- |
| `PolicySource` | [`ReVersionString`](#ReVersionString) | No | Policy file URL template | -- |

### Example

```json
{
    "ClassPlanSource": {
        "Value": "https://example.com/ClassPlan.json",
        "Version": 1
    },
    "TimeLayoutSource": {
        "Value": "https://example.com/TimeLayout.json",
        "Version": 1
    },
    "SubjectsSource": {
        "Value": "https://example.com/Subjects.json",
        "Version": 1
    },
    "DefaultSettingsSource": {
        "Value": "https://example.com/settings.json",
        "Version": 1
    },
    "PolicySource": {
        "Value": "https://example.com/policy.json",
        "Version": 2
    },
    "ServerKind": 0,
    "OrganizationName": "Test Organization"
}
```

<a id="mgmt-policy"></a>

## Policy File

Controls various ClassIsland behaviors. See [Policy File](policy.md) for more detailes

<a id="mgmt-profile"></a>

## Timetable, Time Layout, and Subject Files

Files that store timetables, time layouts, and subjects. These follow the profile file format.

You can directly export a profile file containing this information and reference it in the manifest.

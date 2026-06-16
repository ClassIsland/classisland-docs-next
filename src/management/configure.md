# 集控配置文件

ClassIsland 集控配置文件的参考文档。

## 目录

### 类型

| 类型 | 说明 |
| -- | -- |
| [`ReVersionString`](#reversionstring) | 一种存储了字符串和其版本信息的类型。 |

### 配置文件

| 文件 | 说明 |
| -- | -- |
| [集控配置](#mgmt-configure) | 客户端集控配置，存储了集控服务器/集控清单 url 的相关信息。 |
| [集控清单](#mgmt-manifest) | 包含了要拉取的集控相关文件的信息和组织的相关信息。 |
| [策略文件](#mgmt-policy) | 控制 ClassIsland 行为的各个策略。 |
| 应用设置 | ClassIsland 的设置。 |
| [课表、时间表与科目文件](#mgmt-profile) | 存储课表、时间表与科目信息的文件。 |

<a id="ReVersionString"></a>

## ReVersionString

`ReVersionString`是一种存储了字符串和其版本信息的类型。

### 成员

| 属性 | 类型 | 必填？ | 说明 | 示例 |
| -- | -- | -- | -- | -- |
| `Version` | `int` | **是** | 当前字符串的版本序号 | `1` |
| `Value` | `string?` | 否 | 字符串内容 | `Hello world!` |

### 示例

```json
{
    "Version": 1,
    "Value": "Hello world!"
}
```

<a id="mgmt-configure"></a>

## 集控配置

客户端集控配置，存储了集控服务器/集控清单 url 的相关信息。

### 属性

| 属性 | 类型 | 必填？ | 说明 | 示例 |
| -- | -- | -- | -- | -- |
| `ManagementServerKind` | `int` | **是** | 集控服务器类型。（`0`：静态托管的配置文件；`1`：集控服务器） | `0` |
| `ManagementServer` | `string` | 仅当`ManagementServerKind`为 1 时必填 | 集控服务器地址 | `https://example.com:23333` |
| `ManagementServerGrpc` | `string` | 仅当`ManagementServerKind`为 1 时必填 | 集控服务器Grpc通讯地址 | `https://example.com:23333` |
| `ManifestUrlTemplate` | `string` | 仅当`ManagementServerKind`为 0 时必填 | 集控清单 url 模板 | `https://example.com/manifest.json` |
| `ClassIdentity` | `string` | 否 | 班级标识符 | `1-101` |

### 示例

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

## 集控清单

包含了要拉取的集控相关文件的信息和组织的相关信息。

如果您正在手动修改此文件，请务必在修改了`ReVersionString`类型的属性后更新该属性的版本序号，否则 ClassIsland 实例可能不会更新相关信息。

### 属性

| 属性 | 类型 | 必填？ | 说明 | 示例 |
| -- | -- | -- | -- | -- |
| `ServerKind` | `int` | **是** | 服务器类型（`0`：静态托管的配置文件；`1`：集控服务器） | `0` |
| `OrganizationName` | `string` | 否 | 组织名称 | `⌈黑塔⌋空间站` |
| `CoreVersion` | `string` | 是 | 集控服务核心版本 | `2.0.0.0` |
| `ClassPlanSource` | [`ReVersionString`](#ReVersionString) | 否 | 课表文件 url 模板 | -- |
| `TimeLayoutSource` | [`ReVersionString`](#ReVersionString) | 否 | 时间表文件 url 模板 | -- |
| `SubjectsSource` | [`ReVersionString`](#ReVersionString) | 否 | 科目文件 url 模板 | -- |
| `DefaultSettingsSource` | [`ReVersionString`](#ReVersionString) | 否 | 应用设置 url 模板 | -- |
| `PolicySource` | [`ReVersionString`](#ReVersionString) | 否 | 策略文件 url 模板 | -- |

### 示例

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
    "CoreVersion": "2.0.0.0",
    "OrganizationName": "Test Organization"
}
```

<a id="mgmt-policy"></a>

## 策略文件

控制 ClassIsland 行为的各个策略，详见[策略文件](policy.md)。

<a id="mgmt-profile"></a>

## 课表、时间表与科目文件

存储课表、时间表与科目信息的文件，格式为档案文件格式。

您可以直接将含有这些信息的档案文件导出，并直接在清单引用这些文件。

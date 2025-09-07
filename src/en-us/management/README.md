---
title: Centralized Management
index: false
icon: server
category:
  - User Guide
---

The IT department of a school/organization can use the Centralized Management feature to distribute timetables, time layouts, subjects, and other information to all ClassIsland instances in the school. It can also centrally adjust software settings and restrict certain features, improving management convenience.

<a id="get-started"></a>

## Getting Started

This feature supports deployment via static configuration files or via a management server. You can freely choose the deployment method depending on your needs

<a id="get-started-static"></a>

### Using Static Configuration Files

You can manually create a centralized management configuration file and host it on a static website.

[🚀Tutorial](tutorial-create-management-config.md)

[📖Feference Docs](configure.md)

<a id="get-started-server"></a>

### Management Server

_🚧 In development_

<a id="get-started-compare"></a>

### Which One to Choose?

(WIP)

<a id="loading-progress"></a>

## Loading Process

Centralized management configurations are loaded according to the following process. Expand to view details:

::: details Expand Flowchart
```mermaid
graph TD
  A(("App Startup")) --> B["Load Local Management Config"]
  B --> C{"Management Enabled?"}
  C -->|"Yes"| D["Load Management Manifest"]
  D --> E{"Connection Type?"}
  E -->|"Management Server"| F["Establish gRPC Connection"]
  F --> G["Listen for Server Commands"] --> H
  E -->|"Static Config File"| H["Load Policies"]
  H --> I{"First Startup?"}
  I -->|"Yes"| J["Load Default Settings"] --> K
  I -->|"No"| K(("Load Profile"))
  K --> L["Sequentially Load and Merge Subjects, Profiles, and Time Layouts"]
  L --> M["Save Object Version Information"]
  M --> N(("Loading Complete"))
  C -->|"No"| N
```
:::

The retrieved configuration files (such as manifests, policies, timetables, etc.) are cached locally and only re-fetched when updates are available. Once centralized management is enabled, the managed profile is forcibly loaded, and its data does not interoperate with ordinary profiles.

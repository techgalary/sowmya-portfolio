---
layout: ../../layouts/GuideLayout.astro
title: Terraform module design notes
description: Conventions for reusable Terraform modules and safer infrastructure changes.
category: Terraform
---

# Terraform module design notes

Good modules make common infrastructure patterns easier to reuse without hiding important behavior.

## Design principles

- Keep each module focused on one understandable responsibility.
- Use clear names for variables and outputs.
- Add descriptions and sensible validation to inputs.
- Pin provider and module versions where appropriate.
- Keep secrets out of source control and avoid exposing sensitive values in outputs.
- Separate environment-specific configuration from reusable module logic.

## A typical module shape

```text
modules/
  network/
    main.tf
    variables.tf
    outputs.tf
    README.md
environments/
  dev/
  staging/
  production/
```

The exact structure should fit the team's scale and deployment model; avoid adding layers solely for the sake of abstraction.

## Before applying

```bash
terraform fmt -check -recursive
terraform validate
terraform plan
```

Review the plan, confirm the target workspace/backend and credentials, and follow your organization's approval process before applying changes.

## Document trade-offs

Explain what the module creates, required permissions, important defaults, outputs, and any destructive changes. A short README is part of the module's interface.

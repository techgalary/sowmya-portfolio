---
layout: ../../layouts/GuideLayout.astro
title: Kubernetes troubleshooting checklist
description: A repeatable first-response workflow for common Kubernetes workload problems.
category: Kubernetes
---

# Kubernetes troubleshooting checklist

Use this as a starting point when a workload is unhealthy. Adapt it to your cluster policies and incident procedures.

## 1. Check the workload state

```bash
kubectl get pods -n <namespace>
kubectl get deploy,rs -n <namespace>
kubectl get events -n <namespace> --sort-by=.lastTimestamp
```

Look for restarts, pending pods, failed scheduling, image-pull errors, and recent events.

## 2. Inspect the affected pod

```bash
kubectl describe pod <pod-name> -n <namespace>
kubectl logs <pod-name> -n <namespace> --all-containers
kubectl logs <pod-name> -n <namespace> --previous
```

Use `--previous` when a container restarted and the prior container logs are still available.

## 3. Check common causes

- **CrashLoopBackOff:** inspect application logs, startup configuration, dependencies, and probe settings.
- **ImagePullBackOff:** verify image name, tag, registry access, and image pull secrets.
- **Pending:** inspect scheduler events, resource requests, node capacity, affinity, and taints.
- **Probe failures:** compare probe path, port, timeout, initial delay, and application startup behavior.
- **Service connectivity:** check selectors, endpoints, ports, network policies, and DNS.

## 4. Validate before changing anything

Prefer evidence gathering before restarting workloads or changing production configuration. Follow your team's change process and capture relevant events/logs for the incident record.

## 5. Record the learning

For a real incident, document impact, detection, root cause, remediation, and prevention. Never publish private logs, customer data, credentials, or internal infrastructure details.

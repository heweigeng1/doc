# 1. 术语

介绍一些应该熟悉的术语和定义。

## 1.1. 目录

<!-- TOC -->

- [1. 术语](#1-术语)
    - [1.1. 目录](#11-目录)
    - [1.2. 容器镜像（Container image）](#12-容器镜像container-image)
    - [1.3. 容器（Container）](#13-容器container)
    - [1.4. 标签（Tag）](#14-标签tag)
    - [1.5. Dockerfile](#15-dockerfile)
    - [1.6. 构建（Build）](#16-构建build)
    - [1.7. 仓库（Repository，Repo）](#17-仓库repositoryrepo)
    - [1.8. 注册表（Registry）](#18-注册表registry)
    - [1.9. Docker Hub](#19-docker-hub)
    - [1.10. Azure 容器注册表（Azure Container Registry）](#110-azure-容器注册表azure-container-registry)
    - [1.11. Docker 可信注册表（Docker Trusted Registry）](#111-docker-可信注册表docker-trusted-registry)
    - [1.12. Docker 社区版(CE)](#112-docker-社区版ce)
    - [1.13. Docker 企业版(EE)](#113-docker-企业版ee)
    - [1.14. Compose](#114-compose)
    - [1.15. 集群（Cluster）](#115-集群cluster)
    - [1.16. 编排引擎（Orchestrator）](#116-编排引擎orchestrator)
    - [1.17. 总结](#117-总结)

<!-- /TOC -->

## 1.2. 容器镜像（Container image）

一个包含了创建容器所需所有依赖和信息的“包”。镜像包含所有依赖（例如各种框架）和容器运行时需要使用的所有部署和执行配置。通常，一个镜像可来自多个基础镜像，它们一层一层地堆砌成了容器的文件系统。创建好的镜像是不可变的。

## 1.3. 容器（Container）

Docker 镜像的实例。一个容器代表一个正在运行的应用程序、进程或服务。它由Docker 镜像、执行环境和标准指令集组成。需要扩展服务时，我们可以从同一个镜像创建多个容器实例，或者也可以通过同一个镜像创建多个实例，分别给每个实例传递不同参数，通过批处理方式实现。

## 1.4. 标签（Tag）

用于镜像的标记或标签，让不同镜像或同一镜像的不同版本（依赖于版本号或目标环境）可以区分开来。

## 1.5. Dockerfile

一个文本文件，其中包含创建镜像的指令。

## 1.6. 构建（Build）

构建容器镜像的操作。可基于 Dockerfile 提供的信息和上下文，以及构建这个镜像的文件夹中其他文件来构建一个容器镜像。我们可以使用 Docker 命令（docker build）来构建镜像。

## 1.7. 仓库（Repository，Repo）

相关 Docker 镜像的集合，用标签来表示镜像版本。有些仓库会包含某个特定镜像的多个变体，例如，一个镜像包含若干 SDK（更加重量级），一个镜像只包含运行时（更加轻量级）等。这些变体可以用标签来标记。一个仓库可包含多个平台变体，例如一个 Linux 镜像和一个Windows 镜像。

## 1.8. 注册表（Registry）

为仓库提供访问服务。对于大多数公共镜像来说，默认的注册表是 Docker Hub（它隶属于 Docker 公司）。一个注册表通常包含来自于多个团队的仓库。企业通常会创建私有注册表来存储和管理他们创建的镜像。Azure 容器注册表也是一种注册表。

## 1.9. Docker Hub

公用的注册表，可用来上传镜像并让它们协同工作。Docker Hub 提供了 Docker 镜像托管服务、公有或私有注册表、构建触发器和 Web hook，可以和 GitHub 与 Bitbucket 无缝集成。

## 1.10. Azure 容器注册表（Azure Container Registry）

一种和 Docker 镜像配合使用的公共资源，它的组件位于 Azure 中。它提供了一个与用户的 Azure 部署紧密相关的注册表，我们可以使用 Azure Active Directory 组和权限对其进行访问控制。

## 1.11. Docker 可信注册表（Docker Trusted Registry）

一种 Docker 注册表服务（来自 Docker 公司），可以在本地安装，所以它一般在企业内部数据中心和网络中使用。对于需要在企业内部进行管理的私有镜像来说，这种方式更加方便。Docker 可信注册表包含在 Docker Datacenter 产品中。

## 1.12. Docker 社区版(CE)

针对 Windows 和 macOS 的开发工具集，用于在本地构建，运行和测试容器。

## 1.13. Docker 企业版(EE)

适用于 Linux 和 Windows 开发的企业级 Docker 工具集。

## 1.14. Compose

命令行工具和用于定义并运行多容器应用程序的 YAML 文件格式元数据。可以用一个或多个.yml 文件（取决于具体环境，可以覆写部分值），基于多个镜像定义一个应用程序。创建了这些定义后，我们只用一行命令（docker-compose up）就可以完成整个多容器应用的部署，这行命令会在Docker 主机上为每个镜像创建一个容器。

## 1.15. 集群（Cluster）

一组 Docker 主机可通过一个虚拟的 Docker 主机暴露，让应用程序可以扩展为多个服务实例，分布到集群内的多个主机上。Docker 集群可以使用 Docker Swarm、Mesosphere DC/OS、Kubernetes 和 Azure Service Fabric 来创建。（如果使用 Docker Swarm 管理集群，通常使用 Swarm 这个术语来代表集群。）

## 1.16. 编排引擎（Orchestrator）

用来简化集群和 Docker 主机管理的工具。编排引擎可以让我们通过一个命令行工具（CLI）或者一个图形化的界面来管理镜像，容器和主机。我们可以管理容器网络、配置、负载均衡、服务发现、高可用性、Docker 主机配置等。编排引擎负责在一组节点上运行、分发、扩展和修复工作负载。通常来说，编排引擎产品和提供集群基础设施的产品（如 Mesosphere DC/OS、Kubernetes、Docker Swarm 和 Azure Service Fabric）是相同的。

## 1.17. 总结

dockerfile是一个包含了操作命令的文本文件，可以用来执行各种指令。方便重复创建多个镜像。容器镜像其实就是一个服务，要执行或者运行服务时，会实例化为一个容器。开发人员应该把镜像存储到注册表中，注册表可以充当容器库，同时部署在开发环境中的编排引擎时必不可少的。

微服务可以使我们跨界使用各种技术。
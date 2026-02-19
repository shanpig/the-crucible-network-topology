![Two dockerized app talking to each other in a local instance (computer)](1.png)
_Caption: Two dockerized app talking to each other in a local instance (computer)._

![Kubernetes with port forwarding to one pod](2.png)
_Caption: Kubernetes cluster with 1 node (local computer), running 3 frontend and 3 backend pods, using port forwarding to access one pod._

![Kubernetes with two node ports](3.png)
_Caption: Kubernetes cluster with 1 node, running 3 frontend and 3 backend pods, with two node ports for accessing both frontend and backend pods._

![Kubernetes, 2 nodes, port forwarding](4.png)
_Caption: Kubernetes cluster with 2 nodes (3 pods each), accessed via port forwarding to one of the pods._

![Kubernetes, 2 nodes, node port access via kube-proxy](5.png)
_Caption: Kubernetes cluster with 2 nodes (3 pods each), accessed via node port, with kube-proxy selecting the pod._

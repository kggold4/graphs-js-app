class GraphAlgo {
    constructor(graph = null) {
        this.init(graph);
    }

    copy() {
        // for(node in this.graph.get)
    }

    init(graph) {
        this.graph = graph;
    }

    getGraph() {
        return this.graph;
    }

    // implementation of dijkstra algorithm function
    dijkstra(startNodeID, visited_return = false, dist_return = false, prev_return = false) {

        let startNode = this.graph.getNode(startNodeID);

        const inf = 100000;

        let visited = {};
        let dist = {};
        let prev = {};

        for(const node in this.graph.nodes) {
            visited[this.graph.nodes[node].id] = false;
            dist[this.graph.nodes[node].id] = inf;
            prev[this.graph.nodes[node].id] = null;
        }

        // getting the first node in the graph and add it to the priority queue
        let q = new PriorityQueue();
        q.enqueue(startNode);
        dist[id1] = 0;

        // Dijkstra algorithm
        while(!q.empty()) {
            let u = q.dequeue();
            let neightbors = this.graph.getChilds(u.id);
            for(let i = 0; i < neightbors.length; i++) {
                let v = neightbors[i];
                let v_node = this.graph.getNode(v);
                if(visited[v] == false && (dist[v] > dist[u.id] + distance(u, v_node))) {
                    q.enqueue(v_node);
                    dist[v] = dist[u.id] + distance(u, v_node);
                    prev[v] = u;
                }
            }
            visited[u.id] = true;
            if(u.id == id2) break;
        }

        if(visited_return) return visited;
        else if(dist_return) return dist;
        else return prev;
    }

    // return true if all the nodes in the graph are connected with edges using BFS algorithm
    isConnected() {

        // if the graph is empty return true
        if(this.graph.empty() || this.graph.nodeSize() == 1) return true;

        // for each id of node in the graph add to colors with WHITE value
        let colors = {}
        for(const node in this.graph.nodes) {
            colors[this.graph.nodes[node].id] = Color.WHITE;
        }

        // getting the first node in the graph and add it to the queue
        let startNode = this.graph.nodes[0];
        let q = new Queue();
        q.enqueue(startNode);

        // set the first node as GREY
        colors[startNode.id] = Color.GREY;

        // BFS algorithm
        while(!q.empty()) {
            let u = q.dequeue();
            let neightbors = this.graph.getChilds(u.id);
            for(let i = 0; i < neightbors.length; i++) {
                let v = neightbors[i];
                if(colors[v] == Color.WHITE) {
                    colors[v] = Color.GREY;
                    let v_node = this.graph.getNode(v);
                    q.enqueue(v_node);
                }
            }
            // set node as visited = BLACK
            colors[u.id] = Color.BLACK;
        }

        // if all the nodes are visited (BLACK) return true, else: return false
        for(const [key, value] of Object.entries(colors)) {
            if(value != Color.BLACK) return false;
        }
        return true;
    }

    // return the shortest path between two nodes using Dijkstra algorithm
    shortestPath(id1, id2) {

        let empty = []
        if(this.graph.nodeSize() == 0 || !this.graph.hasNode(id1) || !this.graph.hasNode(id2)) return empty;

        let prev = this.dijkstra(id1, prev_return = true);

        // build the path from node2 to id1 nodes
        let path = [];
        let t = node2;
        while(prev[t.id] != null) {
            path.push(t.id);
            t = prev[t.id];
        }
        path.push(id1);

        // return reversed path
        return path.reverse();
    }

    // return the shortest distance between two nodes using Dijkstra algorithm
    shortestPathDist(id1, id2) {
        if(this.graph.nodeSize() == 0 || !this.graph.hasNode(id1) || !this.graph.hasNode(id2)) return -1;
        dist = this.dijkstra(id1, dist_return = true);
        return dist[id2];
    }

    diameterDistance() {
        if(this.graph == null || this.graph.empty() || this.graph.nodeSize <= 1) {
            return 0;
        }

        // get random node from the graph
        let nodes = this.graph.getNodesList();
        let random_node = nodes[Math.random() * (nodes.length) - 1];
        
        let dist = this.dijkstra(random_node, dist_return = true);
        let far_node_id = 0;
        let max_dist = 0;
        
        for(const [key, value] of Object.entries(dist)) {
            if(value > max_dist) {
                max_dist = value;
                far_node_id = key;
            }
        }

        let second_dist = this.dijkstra(far_node_id, dist_return = true);
        max_dist = 0;

        for(const [key, value] of Object.entries(second_dist)) {
            if(value > max_dist) {
                max_dist = value;
            }
        }
        return max_dist;
    }

    // diameterPath() {

    // }

    

}
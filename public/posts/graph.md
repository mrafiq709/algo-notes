##### BFS
```
            Y
          1 |       (-1,1)      (0,1)      (1,1)
            |          |          |          |
            |          |          |(0, 0)    |
          0 |       (-1,0)--------+--------(1,0)
            |          |          |          |
            |          |          |          |
         -1 |       (-1,-1)     (0,-1)     (1,-1)
            |
            |
         -2 |
-X ---------+------------------------------------ X
            |-2       -1          0          1
            |
           -Y
```
```cpp
#define max 101
int X[8] ={-1,-1,0,1,1,1,0,-1};
int Y[8] ={0,1,1,1,0,-1,-1,-1};
// int X[4] ={-1,0,1,0};
// int Y[4] ={0,1,0,-1};
char mat[max][max];
int m,n,count=0,color[max][max], dist[max][max];
void bfs(int x, int y) {
    queue <int> Q;
    Q.push(x);
    Q.push(y);
    color[x][y] = 1;
    dist[x][y] = 0;
    while(!Q.empty()) {
	  int ux = Q.front();
	  Q.pop();
	  int uy = Q.front();
	  Q.pop();
	    for(int k = 0; k < 8; k++) {
            int vx = ux + X[k];
            int vy = uy + Y[k];
            if((vx >= 0 && vx < m) && (vy >= 0 && vy < n)) {
                if(!color[vx][vy] && mat[vx][vy] == 'x') {
                    color[vx][vy] = 1;
                    dist[vx][vy] = dist[ux][uy] + 1;
                    Q.push(vx);
                    Q,push(vy);
                }
            }
        }
    }
}
main() {
    cin >> m >> n;
    memset(color, 0, sizeof(color));
    memset(dist, 0, sizeof(dist));

    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
		    cin >> mat[i][j];
        }
    }
    bfs(0,0);
    puts("-------distance--------");
    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
		    cout << dist[i][j];
        }
        puts("");
    }
}
```
##### BFS Large Input
```cpp
#include <bits/stdc++.h>
#define LL long long int
using namespace std;

const int dx[8] = {-1,1,1,-1};
const int dy[8] = {1,1,-1,-1};

unordered_map<long long, char> mat;
unordered_map<long long, LL> dist;
unordered_set<long long> visited;

LL m, n, cnt = 0;

long long encode(LL x, LL y) {
    return 1LL * x * 1000000000 + y;
}

void bfs(LL startX, LL startY) {
    queue<pair<LL, LL>> q;
    q.push({startX, startY});
    visited.insert(encode(startX, startY));
    dist[encode(startX, startY)] = 0;
    cnt++;

    while (!q.empty()) {
        auto [x, y] = q.front(); q.pop();
        for (LL d = 0; d < 4; ++d) {
            LL nx = x + dx[d];
            LL ny = y + dy[d];
            long long key = encode(nx, ny);
            if (mat.count(key) && mat[key] == '.' && !visited.count(key)) {
                visited.insert(key);
                dist[key] = dist[encode(x, y)] + 1;
                q.push({nx, ny});
                cnt++;
            }
        }
    }
}

int main() {
    cin >> m >> n;
    for (LL x = 0; x < m; x++) {
        for(LL y = 0; y < n; y++) {
            mat[encode(x, y)] = '.';
        }
    }

    bfs(0, 0);

    // for (auto &[key, d] : dist) {
    //     int x = key / 1000000000;
    //     int y = key % 1000000000;
    //     cout << "(" << x << "," << y << ") = " << d << "\n";
    // }
    
    cout << cnt << endl;

    return 0;
}
```
##### BFS Vertex Path(adjacent mattrix)
```cpp
int mat[max][max], vertex, edge,color[max];
void printPath(int nd) {
    if(start==nd)
        cout << start;
    else if(par[nd]==0)
        printf("No Path\n");
        cout << “No Path” << endl;
    else {
        printPath(par[nd]);
        cout << “ --> ” << nd;
    }
}
void bfs(int st) {
    queue <int> q;
    par[st] = 0;
    dist[st] = 0;
    color[st] = ‘g’;
    q.push(st);
    while(!q.empty()) {
        int u = q.front();
        q.pop();
        for(int adj = 1; adj <= vertex; adj++) {
            if(mat[u][adj] == 1) {
                if(color[adj] != 'g') {
                    par[adj] = u;
                    color[adj] = 'g';
                    dist[adj] = dist[u] + 1;
                    q.push(adj);
                }
            }
        }
    }
}
main() {
    cin >> vertex >> edge;
    memset(color, 'w', sizeof(color));
    memset(dist, 0, sizeof(dist));
    memset(par, -1, sizeof(par));
    while(edge--) {
        cin >> a >> b;
        mat[a][b] = 1;
        mat[a][b] = 1;
    }
    bfs();
    cin >> start >> endd;
    printPath(endd);
}
```
##### DFS
```cpp
int mat[mx][mx];
char color[mx];
int par[mx], start[mx], time=0, finish[mx];

void dfs_visit(int u) {
    color[u] = 'g';
    start[u] = time = time+1;
    for(int adj=1;adj<=v;adj++)
    {
        if(mat[u][adj]==1 && color[adj]=='w')
        {
            par[adj] = u;
            dfs_visit(adj);
        }
    }
    color[u] = 'b';
    finish[u] = time = time+1;
}

void dfs() {
    for(int u = 1; u <= v; u++) {
        if(color[u] == 'w') dfs_visit(u);
    }
}

int main() {
    int edge, a, b;
    memset(color, 'w', sizeof(color));
    memset(par, -1, sizeof(par));

    cin >> edge;
    while(edge--) {
        cin >> a >> b;
	    mat[a][b] = 1;
    }
    dfs();
    cin >> start >> endd;
    printPath(endd);
}
```
##### Disjoint set
```cpp
int par[101];
void makeset(int element) {
    par[element]=element;
}
int find_rep(int r);
void Union(int a,int b) {
    int u,v;
    u = find_rep(a);
    v = find_rep(b);
    if(u!=v)
    {
        par[u]=v;
    }
}

int find_rep(int r) {
    return (par[r]==r) ? r : par[r] = find_rep(par[r]);
}

int main() {
    cin >> N >> M;
    for(int i = 1; i <= N; i++)
        makeset(i);      
    for(int i = 1; i <= M; i++) {
        cin >> v1 >> v2;
        Union(v1, v2);
    }
    int cnt = 0;
    for(int p = 1; p <= N; p++) {
        if(par[p]==p)
            cnt++;
    }
    cout << cnt << endl;
    return 0;
}
```
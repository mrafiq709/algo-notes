```cpp
#include <bits/stdc++.h>
using namespace std;
const int MAXN = 1e5 + 5;
int bit[MAXN];
int n;

// Adds 'val' to index 'i'
void update(int i, int val) {
    while (i <= n) {
        bit[i] += val;
        i += (i & -i);
    }
}

// Returns sum from 1 to i
int query(int i) {
    int sum = 0;
    while (i > 0) {
        sum += bit[i];
        i -= (i & -i);
    }
    return sum;
}

// Returns sum from l to r (inclusive)
int range_query(int l, int r) {
    return query(r) - query(l - 1);
}

int main() {
    cin >> n;
    vector<int> a(n + 1);
    for (int i = 1; i <= n; ++i) {
        cin >> a[i];
        update(i, a[i]);
    }

    cout << "Sum from 1 to 5: " << query(5) << endl;
    cout << "Sum from 2 to 4: " << range_query(2, 4) << endl;
    update(3, 5);
    cout << "After update, sum from 1 to 5: " << query(5) << endl;

    return 0;
}
```

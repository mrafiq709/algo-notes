##### Sieve prime

```cpp
bool arr[500000]
vector <int> prime;
void sieve(int N) {
    int k = sqrt(N);
    for(int i = 3; i <= k; i += 2) {
        if(arr[i] == 0) {
            for(int j = i _ i; j <= N; j += 2 _ i) {
                arr[j] = 1;
            }
        }
    }
    arr[1] = 1;
    for(int i = 4; i <= N; i += 2) {
        arr[i] = 1;
    }
    prime.push_back(2);
    for(int i = 3; i <= N; i += 2) {
        if(arr[i] == 0)
            prime.push_back(i);
    }
}

main() {
    sieve(25);
    for(int i = 0; i < prime.size(); i++) {
        cout << prime[i] << endl;
    }
}
```

##### Factorization/NumberOfDevisor

```cpp
main () {
    int i, N, k, cnt = 1, fact[1000];
    sieve(N);
    k = prime.size();
    for(i = 0; i < k && N != 1; i++) {
        if(N % prime[i] == 0) {
            int j = 0;
            while(N % prime[i] == 0) {
                j++;
                N = N / prime[i];
            }
            fact[i] = j;
            cnt \*= j + 1; // NOD : NumberOfDevisor
        }
    }
    if(N != 1) {
        fact[N] = 1;
    }
}
```

#### Struct

```cpp
struct XYC {
    int xi, yi, ci;
};
bool comparator (const XYC& a, const XYC& b) {
    if(a.ci == b.ci)
        return a.yi < b.yi;
    return a.ci > b.ci;
}
vector<XYC> xyc;
xyc.push_back({1, 2, 3});
sort(xyc.begin(), xyc.end(), comparator);
```

##### Sort map

```cpp
string arr[] = {"banana", "apple", "cherry", "date"};
map<string, int> votes;
vector<pair<string, int>> vec(votes.begin(), votes.end());
sort(vec.begin(), vec.end(), [](const auto& a, const auto& b) {
    return a.second > b.second;
});
```

##### Merge sort

```cpp
#define INFI 999999
mergeSort(int A[], int left, int right) {
    if(left < right) {
        int mid = (left + right) / 2;
        mergeSort(A, left, mid);
        mergeSort(A, mid + 1, right);
        merge(A, left, mid, right);
    }
}
merge(int A[], int left, int mid, int right) {
    int n1 = mid – left + 1;
    int n2 = right - mid;
    int L[n1], R[n2];
    int j, j, k;
    for(i = 0; i < n1; i++) L[i] = A[left + i];
    for(j = 0; j < n2; j++) R[j] = A[mid + 1 + j];
    i = 0; j = 0, k = 1;
    for(int k = left; k <= right; k++) {
        if(L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
   }
}
main() {
    mergeSort(array, 0, array.length);
}
```

##### Quick sort

```cpp
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}
void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
int main() {
    vector<int> arr = {10, 7, 8, 9, 1, 5};
    quickSort(arr, 0, arr.size() - 1);
    return 0;
}
```

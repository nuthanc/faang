### Quick Sort

* Pivot
  * Based on Pivot, the elements smaller are before and elements larger are after the pivot
* Worst case of O(n^2) when pivot is the smallest or the largest element because of which the array is not split into half(Subarray in only one side)
  * In this case, merge sort is the best, because it has Worst case of O(nlogn)
* Space Complexity is O(logn)

### Merge sort

* Split till there is only one
* Then combine using merge method of left and right half
* 2 Auxillary arrays(max combined size of n) are required while merging because without it when swapping is done, the element to undergo the merge process yet gets overwritten
* Space Complexity is O(n)
* It requires Auxillary Arrays(total size of O(n)) while merging(It's not possible without one because the Left or Right Subarrays get overwritten without them being processed while merging)
  * Consider case when first few elements from Right Subarray are smaller than the smallest in the Left Subarray
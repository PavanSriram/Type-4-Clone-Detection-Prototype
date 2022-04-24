import React from 'react'

class Codes extends React.Component {
    cppBubbleSort = '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    'void swap(int *xp, int *yp)\n'+
    '{\n'+
    '	int temp = *xp;\n'+
    '	*xp = *yp;\n'+
    '	*yp = temp;\n'+
    '}\n'+
    '\n'+
    'void bubbleSort(int arr[], int n)\n'+
    '{\n'+
    '	int i, j;\n'+
    '	for (i = 0; i < n-1; i++)	\n'+
    '	\n'+
    '	for (j = 0; j < n-i-1; j++)\n'+
    '		if (arr[j] > arr[j+1])\n'+
    '			swap(&arr[j], &arr[j+1]);\n'+
    '}\n'+
    '\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '    cout << "Bubble-sort output:" << endl;\n'+
    '	int i;\n'+
    '	for (i = 0; i < size; i++)\n'+
    '		cout << arr[i] << " ";\n'+
    '	cout << endl;\n'+
    '}\n'+
    '\n'+
    'int main()\n'+
    '{\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "./test-cases/test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '\n'+
    '	// int arr[] = {64, 34, 25, 12, 22, 11, 90};\n'+
    '	// int n = sizeof(arr)/sizeof(arr[0]);\n'+
    '	bubbleSort(arr, n);\n'+
    '	// cout<<"Sorted array: \n";\n'+
    '	printArray(arr, n);\n'+
    '    ofstream myfile("test-case-1-bubble-sort-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '	return 0;\n'+
    '}\n'+
    ';';
    cppInsertionSort = '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    'void insertionSort(int arr[], int n)\n'+
    '{\n'+
    '	int i, key, j;\n'+
    '	for (i = 1; i < n; i++)\n'+
    '	{\n'+
    '		key = arr[i];\n'+
    '		j = i - 1;\n'+
    '\n'+
    '		while (j >= 0 && arr[j] > key)\n'+
    '		{\n'+
    '			arr[j + 1] = arr[j];\n'+
    '			j = j - 1;\n'+
    '		}\n'+
    '		arr[j + 1] = key;\n'+
    '	}\n'+
    '}\n'+
    '\n'+
    'void printArray(int arr[], int n)\n'+
    '{\n'+
    '    cout << "Insertion-sort output:" << endl;\n'+
    '	int i;\n'+
    '	for (i = 0; i < n; i++)\n'+
    '		cout << arr[i] << " ";\n'+
    '	cout << endl;\n'+
    '}\n'+
    '\n'+
    'int main()\n'+
    '{\n'+
    '\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "./test-cases/test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '\n'+
    '	// int arr[] = { 12, 11, 13, 5, 6 };\n'+
    '	// int n = sizeof(arr) / sizeof(arr[0]);\n'+
    '\n'+
    '	insertionSort(arr, n);\n'+
    '	printArray(arr, n);\n'+
    '\n'+
    '    ofstream myfile("test-case-1-insertion-sort-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '\n'+
    '	return 0;\n'+
    '}';
    cppMergeSort = '// C++ program for Merge Sort\n'+
    '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    '// Merges two subarrays of array[].\n'+
    '// First subarray is arr[begin..mid]\n'+
    '// Second subarray is arr[mid+1..end]\n'+
    'void merge(int array[], int const left, int const mid, int const right)\n'+
    '{\n'+
    '    auto const subArrayOne = mid - left + 1;\n'+
    '    auto const subArrayTwo = right - mid;\n'+
    '\n'+
    '    // Create temp arrays\n'+
    '    auto *leftArray = new int[subArrayOne],\n'+
    '         *rightArray = new int[subArrayTwo];\n'+
    '\n'+
    '    // Copy data to temp arrays leftArray[] and rightArray[]\n'+
    '    for (auto i = 0; i < subArrayOne; i++)\n'+
    '        leftArray[i] = array[left + i];\n'+
    '    for (auto j = 0; j < subArrayTwo; j++)\n'+
    '        rightArray[j] = array[mid + 1 + j];\n'+
    '\n'+
    '    auto indexOfSubArrayOne = 0,   // Initial index of first sub-array\n'+
    '        indexOfSubArrayTwo = 0;    // Initial index of second sub-array\n'+
    '    int indexOfMergedArray = left; // Initial index of merged array\n'+
    '\n'+
    '    // Merge the temp arrays back into array[left..right]\n'+
    '    while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo)\n'+
    '    {\n'+
    '        if (leftArray[indexOfSubArrayOne] <= rightArray[indexOfSubArrayTwo])\n'+
    '        {\n'+
    '            array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];\n'+
    '            indexOfSubArrayOne++;\n'+
    '        }\n'+
    '        else\n'+
    '        {\n'+
    '            array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];\n'+
    '            indexOfSubArrayTwo++;\n'+
    '        }\n'+
    '        indexOfMergedArray++;\n'+
    '    }\n'+
    '    // Copy the remaining elements of\n'+
    '    // left[], if there are any\n'+
    '    while (indexOfSubArrayOne < subArrayOne)\n'+
    '    {\n'+
    '        array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];\n'+
    '        indexOfSubArrayOne++;\n'+
    '        indexOfMergedArray++;\n'+
    '    }\n'+
    '    // Copy the remaining elements of\n'+
    '    // right[], if there are any\n'+
    '    while (indexOfSubArrayTwo < subArrayTwo)\n'+
    '    {\n'+
    '        array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];\n'+
    '        indexOfSubArrayTwo++;\n'+
    '        indexOfMergedArray++;\n'+
    '    }\n'+
    '}\n'+
    '\n'+
    '// begin is for left index and end is\n'+
    '// right index of the sub-array\n'+
    '// of arr to be sorted */\n'+
    'void mergeSort(int array[], int const begin, int const end)\n'+
    '{\n'+
    '    if (begin >= end)\n'+
    '        return; // Returns recursively\n'+
    '\n'+
    '    auto mid = begin + (end - begin) / 2;\n'+
    '    mergeSort(array, begin, mid);\n'+
    '    mergeSort(array, mid + 1, end);\n'+
    '    merge(array, begin, mid, end);\n'+
    '}\n'+
    '\n'+
    '// UTILITY FUNCTIONS\n'+
    '// Function to print an array\n'+
    'void printArray(int A[], int size)\n'+
    '{\n'+
    '    cout << "Merge-sort output:" << endl;\n'+
    '    for (auto i = 0; i < size; i++)\n'+
    '        cout << A[i] << " ";\n'+
    '    cout << endl;\n'+
    '}\n'+
    '\n'+
    '// Driver code\n'+
    'int main()\n'+
    '{\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "./test-cases/test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '    // for(int i=0; i<n; i++){\n'+
    '    //     cout << arr[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    // int arr[] = { 12, 11, 13, 5, 6, 7 };\n'+
    '    auto arr_size = n;\n'+
    '\n'+
    '    // cout << "Given array is \n";\n'+
    '    // printArray(arr, arr_size);\n'+
    '\n'+
    '    mergeSort(arr, 0, arr_size - 1);\n'+
    '\n'+
    '    // cout << "\nSorted array is \n";\n'+
    '    printArray(arr, arr_size);\n'+
    '\n'+
    '    ofstream myfile("test-case-1-merge-sort-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '\n'+
    '    return 0;\n'+
    '}\n'+
    '';
    cppQuickSort = '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    'void swap(int* a, int* b)\n'+
    '{\n'+
    '	int t = *a;\n'+
    '	*a = *b;\n'+
    '	*b = t;\n'+
    '}\n'+
    '\n'+
    'int partition (int arr[], int low, int high)\n'+
    '{\n'+
    '	int pivot = arr[high]; // pivot\n'+
    '	int i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far\n'+
    '\n'+
    '	for (int j = low; j <= high - 1; j++)\n'+
    '	{\n'+
    '		if (arr[j] < pivot)\n'+
    '		{\n'+
    '			i++; // increment index of smaller element\n'+
    '			swap(&arr[i], &arr[j]);\n'+
    '		}\n'+
    '	}\n'+
    '	swap(&arr[i + 1], &arr[high]);\n'+
    '	return (i + 1);\n'+
    '}\n'+
    '\n'+
    'void quickSort(int arr[], int low, int high)\n'+
    '{\n'+
    '	if (low < high)\n'+
    '	{\n'+
    '		int pi = partition(arr, low, high);\n'+
    '\n'+
    '		quickSort(arr, low, pi - 1);\n'+
    '		quickSort(arr, pi + 1, high);\n'+
    '	}\n'+
    '}\n'+
    '\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '	cout << "Quick-sort output:" << endl;\n'+
    '	int i;\n'+
    '	for (i = 0; i < size; i++)\n'+
    '		cout << arr[i] << " ";\n'+
    '	cout << endl;\n'+
    '}\n'+
    '\n'+
    'int main()\n'+
    '{\n'+
    '\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "./test-cases/test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '\n'+
    '    \n'+
    '	// int arr[] = {10, 7, 8, 9, 1, 5};\n'+
    '	// int n = sizeof(arr) / sizeof(arr[0]);\n'+
    '	quickSort(arr, 0, n - 1);\n'+
    '	// cout << "Sorted array: \n";\n'+
    '	printArray(arr, n);\n'+
    '\n'+
    '    ofstream myfile("test-case-1-quick-sort-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '\n'+
    '	return 0;\n'+
    '}';
    cppSelectionSort = '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    'void swap(int *xp, int *yp)\n'+
    '{\n'+
    '	int temp = *xp;\n'+
    '	*xp = *yp;\n'+
    '	*yp = temp;\n'+
    '}\n'+
    '\n'+
    'void selectionSort(int arr[], int n)\n'+
    '{\n'+
    '	int i, j, min_idx;\n'+
    '\n'+
    '	for (i = 0; i < n-1; i++)\n'+
    '	{\n'+
    '		min_idx = i;\n'+
    '		for (j = i+1; j < n; j++)\n'+
    '		if (arr[j] < arr[min_idx])\n'+
    '			min_idx = j;\n'+
    '\n'+
    '		swap(&arr[min_idx], &arr[i]);\n'+
    '	}\n'+
    '}\n'+
    '\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    '    cout << "Selection-sort output:" << endl;\n'+
    '	int i;\n'+
    '	for (i=0; i < size; i++)\n'+
    '		cout << arr[i] << " ";\n'+
    '	cout << endl;\n'+
    '}\n'+
    '\n'+
    'int main()\n'+
    '{\n'+
    '\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "./test-cases/test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '\n'+
    '	// int arr[] = {64, 25, 12, 22, 11};\n'+
    '	// int n = sizeof(arr)/sizeof(arr[0]);\n'+
    '	selectionSort(arr, n);\n'+
    '	// cout << "Sorted array: \n";\n'+
    '	printArray(arr, n);\n'+
    '\n'+
    '    ofstream myfile("test-case-1-selection-sort-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '\n'+
    '	return 0;\n'+
    '}';
    cppReverseArray = '#include <bits/stdc++.h>\n'+
    'using namespace std;\n'+
    '\n'+
    'void rvereseArray(int arr[], int start, int end)\n'+
    '{\n'+
    '	while (start < end)\n'+
    '	{\n'+
    '		int temp = arr[start];\n'+
    '		arr[start] = arr[end];\n'+
    '		arr[end] = temp;\n'+
    '		start++;\n'+
    '		end--;\n'+
    '	}\n'+
    '}	\n'+
    '\n'+
    'void printArray(int arr[], int size)\n'+
    '{\n'+
    'for (int i = 0; i < size; i++)\n'+
    'cout << arr[i] << " ";\n'+
    '\n'+
    'cout << endl;\n'+
    '}\n'+
    '\n'+
    'int main()\n'+
    '{\n'+
    '\n'+
    '    fstream file;\n'+
    '    string word, t, q, filename;\n'+
    '    vector<int> fileInputs;\n'+
    '    filename = "test-case-1.txt";\n'+
    '    file.open(filename.c_str());\n'+
    '    while (file >> word)\n'+
    '    {\n'+
    '        fileInputs.push_back(stoi(word));\n'+
    '    }\n'+
    '    // for(int i=0; i<fileInputs.size(); i++){\n'+
    '    //     cout << fileInputs[i] << endl;\n'+
    '    // }\n'+
    '\n'+
    '    int n = fileInputs[0];\n'+
    '    int arr[n];\n'+
    '    for (int i = 0; i < n; i++)\n'+
    '    {\n'+
    '        arr[i] = fileInputs[i + 1];\n'+
    '    }\n'+
    '\n'+
    '	// int arr[] = {1, 2, 3, 4, 5, 6};\n'+
    '	\n'+
    '	// int n = sizeof(arr) / sizeof(arr[0]);\n'+
    '\n'+
    '	// printArray(arr, n);\n'+
    '	\n'+
    '	rvereseArray(arr, 0, n-1);\n'+
    '	\n'+
    '	// cout << "Reversed array is" << endl;\n'+
    '	\n'+
    '	// printArray(arr, n);\n'+
    '\n'+
    '    ofstream myfile("test-case-1-reverse-array-cpp.txt");\n'+
    '    if (myfile.is_open())\n'+
    '    {\n'+
    '        for (int count = 0; count < n; count++)\n'+
    '        {\n'+
    '            myfile << arr[count] << endl;\n'+
    '        }\n'+
    '        myfile.close();\n'+
    '    }\n'+
    '    else\n'+
    '        cout << "Unable to open file";\n'+
    '	\n'+
    '	return 0;\n'+
    '}\n'+
    '';

    javaBubbleSort = 'java bubblesort';
    javaInsertionSort = 'java insertionsort';
    javaMergeSort = 'java mergesort';
    javaQuickSort = 'java quicksort';
    javaSelectionSort = 'java selectionsort';

    pythonBubbleSort = 'python bubblesort';
    pythonInsertionSort = 'python insertionsort';
    pythonMergeSort = 'python mergesort';
    pythonQuickSort = 'python quicksort';
    pythonSelectionSort = 'python selectionsort';
    pyReverseArray = 'def reverseList(A, start, end):\n'+
    '	while start < end:\n'+
    '		A[start], A[end] = A[end], A[start]\n'+
    '		start += 1\n'+
    '		end -= 1\n'+
    '\n'+
    'arr = []\n'+
    'n = -1\n'+
    'flag = 0\n'+
    'file1 = open("test-case-1.txt", "r")\n'+
    'Lines = file1.readlines()\n'+
    'for line in Lines:\n'+
    '    curr_line = line.strip()\n'+
    '    # print(curr_line)\n'+
    '    converted_num = int(curr_line)\n'+
    '    # print(converted_num)\n'+
    '    if(flag==0):\n'+
    '        flag = 1\n'+
    '        n = converted_num\n'+
    '    else:\n'+
    '        arr.append(converted_num)\n'+
    '\n'+
    '# A = [1, 2, 3, 4, 5, 6]\n'+
    '# print(A)\n'+
    'reverseList(arr, 0, n-1)\n'+
    '# print("Reversed list is")\n'+
    '# print(A)\n'+
    '\n'+
    'file1 = open("output.txt", "w")\n'+
    'for i in range(0, n):\n'+
    '	# print (arr[i], end = " ")\n'+
    '    converted_arr_i = str(arr[i])\n'+
    '    file1.writelines(converted_arr_i)\n'+
    '    file1.writelines("\n")\n'+
    '# file1.writelines(L)\n'+
    'file1.close()';
}

export default Codes
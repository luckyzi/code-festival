정답 : 3번, 5번


시간복잡도 O(1)은 원소의 개수가 아무리 커져도 작동시간이 늘어나지 않는 것.

1번 arr[i]는 인덱스를 통해 바로 값이 확인가능

2번 push(5)은 마지막 인덱스에 접근함

4번 pop()은 마지막 인덱스에 접근함


3번 slice()는 배열의 길이가 길면 그만큼 메모리를 더 사용해야 하므로 O(n)의 복잡도를 갖는다.

5번 includes()는 배열의 길이가 길수록 탐색해야 하는 값도 많아지기 때문에 O(n)의 복잡도를 갖는다.
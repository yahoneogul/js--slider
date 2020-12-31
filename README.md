# js--slider

## 슬라이더 만들기

1. 슬라이드가 끊임없이 나오게 하기 위해 sldier-wrapper의 첫번째 자식 요소와 마지막 자식 요소를 복제합니다.
   1-1 element.cloneNode() - 요소를 복제하는 함수
   1-2 element.cloneNode(true) - 요소의 자식 요소도 복제
   element.cloneNode(false) - 요소의 자식 요소는 복제하지 않음

2. 복제한 요소를 slider-wrapper의 앞과 뒤에 붙입니다.
   2-1 parentElement.appendChild(childElement) - 부모 요소 속 맨 뒤에 넣기
   2-2 parentElement.insertBefore(childElement, standardElement) 특정 요소(standardElement) 앞에 넣기

3. currentIdx를 통해 transform:translate3D() 값을 조정하여 slider-wrapper를 이동시킵니다.

4. 복제한 요소에 도달할 때 setTimeout() 함수로 원본 요소로 이동시킵니다.

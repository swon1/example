# 📝 JS Get BackGround URL

<br>

<br>

이전 홈페이지 유지/보수 작업 중
<br>
메인 비주얼 영역의 슬라이드에 모션 효과를 추가해달라는 업무 요청을 받은 적이 있다.

그 사이트는 어드민 에디터로 관리되는 홈페이지였기에 데이터값으로 뿌려진 코드들이라 직접적인 추가,수정이 불가능했고
<br>
당장 수정이 되어야 하는 상황이라 해당 작업을 진행했던 기억이 있다.

언젠가 활용할 수 있을때를 대비해 그 때 사용한 JavaScript 코드를 올려두었다.

<br>

<br>

```javascript
let $el = {
    btn : a.querySelectorAll('.bg-copy-btn'),
};

[].forEach.call( $el.btn, ( el ) => {
    el.addEventListener( 'click' , ( e ) => {
        let $p = (e.target).parentElement,
        $styleL = getComputedStyle($p),
        $bg01 = $styleL.backgroundImage,
        $bg02 = $bg01.replace(/^url\(['"](.+)['"]\)/, '$1');

        let $bg03 = getComputedStyle($p).getPropertyValue('background-image');

        let $bg04 = getComputedStyle($p).getPropertyValue('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');

        let $bgBox = a.querySelector('.bg-copy-place');
        let $bgText = a.querySelector('.bg-copy-text');
        $bgBox.style.backgroundImage = `url('${$bg02}')`;
        $bgText.innerHTML = `${$bg02}`;

        console.log($bg02);
        console.log($bg03);
        console.log($bg04);
    });
});
```

<br>

<br>

'background-images' 값 자체를 가져오는건 'getPropertyValue' 를 활용하면 충분하지만
<br>
url('')부분을 제외한 순수 경로 (ex.https://www.google.com) 를 가져오기 위해 replace를 사용한다.

<br>

[예제](https://swon1.github.io/example/html/js_bg_url.html)

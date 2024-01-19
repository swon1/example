const mainFn = ( a ) => {
    let $reload = a.querySelector('.btn-reload');
    $reload.addEventListener('click', () => {
        window.location.reload();
    });

    let conBox = a.querySelectorAll('.content .content-inner');
    [].forEach.call( conBox, ( el ) => {
        el.addEventListener('click', function( e ) {
            let $this = this.classList.contains('before');
            if ( !($this) ) {
                return false;
            } else {
                e.preventDefault();
                alert('아직 작업 전입니다.');
            }
        });
    });

    let typeBtn = a.querySelectorAll('#contentNav button');
    [].forEach.call( typeBtn, ( el ) => {
        el.addEventListener('click', (e) => {
            let $type = (e.target).getAttribute('data-type');
            let $content = a.querySelectorAll('.content');


            for ( i = 0; i < $content.length; i++ ) {
                $content[i].style.display = 'block';

                let $flagType = ($content)[i].querySelector('h3 span').classList.value;

                ($content)[i].querySelector(`h3 span`).classList.add('no-target');
                if ( $flagType == `flag-${$type}` ) {
                    ($content)[i].querySelector(`h3 span.flag-${$type}`).classList.remove('no-target');
                }

            }

            let $noTarget = a.querySelectorAll('.no-target');

            for ( v = 0; v < $noTarget.length; v++ ) {
                let $tarAt = $noTarget[v].parentNode.parentNode.parentNode;
                $tarAt.style.display = 'none';
                $noTarget[v].classList.remove('no-target');
            }

            console.log($type,$content.length);
        });
    });
};
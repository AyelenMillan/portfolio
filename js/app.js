const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#link')

$form.addEventListener('submit', handleSubmit )

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))

    $buttonMailto.setAttribute('href', `mailto:vayelenmillan@gmail.com?subject=Nombre: ${form.get('name')} Asunto: ${form.get('subject')}&body=${form.get('message')}` )
    $buttonMailto.click()
}
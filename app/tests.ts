import { Selector as $ } from 'testcafe'

fixture `Nopechat`
    .page `https://nopechat.herokuapp.com`

test('It erases text that I enter', async t => {
    await t.typeText('#message', 'Nothing really matters')
    await t.expect($('#tagline').innerText).eql('changing how the world sends extremely temporary messages')
    await t.expect($('#message').textContent).eql('')
})
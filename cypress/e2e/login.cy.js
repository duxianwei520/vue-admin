describe('login', () => {
  it('passes', () => {
    cy.visit('#/login')
    cy.get('[placeholder="用户名"]').type('admin')
    cy.get('[placeholder="密码"]').type('admin')
    cy.intercept('http://localhost:1111/mock/usercenter/login').as('login')
    cy.intercept('http://localhost:1111/mock/usercenter/user/userMenu').as('userMenu')
    cy.intercept('http://localhost:1111/mock/usercenter/user/userInfo').as('userInfo')
    cy.get('.login-submit').click()
    cy.wait('@login').should(({ request, response }) => {
      expect(request.body).to.include('userName')
      expect(request.body).to.include('password')
      expect(request.headers).to.have.property('content-type')
      expect(response && response.body).to.have.property('msg', '操作成功')
      expect(response && response.body).to.have.property('data').and.to.be.a('object').and.to.contain({'token': '1111', 'ticket': 'ticket'})
    })
    cy.wait('@userMenu')
    cy.wait('@userInfo')
    // cy.wait(2000)
    // {enter} causes the form to submit
    // cy.get('input[name=password]').type(`${password}{enter}`)

    // we should be redirected to /dashboard
    cy.url().should('include', '#/')
    
    cy.getAllSessionStorage().should(() => {
      expect(sessionStorage.getItem('ticket')).to.eq('ticket')
      expect(sessionStorage.getItem('token')).to.eq('1111')
    })

    
    // our auth cookie should be present
    // cy.getCookie('your-session-cookie').should('exist')

    // UI should reflect this user being logged in
    // cy.get('h1').should('contain', 'jane.lane')
  })
})
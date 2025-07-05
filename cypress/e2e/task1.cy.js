describe('Header Buttons Visibility', () => {
    beforeEach(() => {
      cy.visit('https://qauto.forstudy.space/', {
        auth: {
          username: "guest",
          password: "welcome2qauto"
        }
      });
    });
    it('Check header buttons', () => {
      cy.get('.btn-primary').as('btnPrimary');
      cy.get('@btnPrimary').should('be.visible');
      cy.get('@btnPrimary').should('be.enabled');
      cy.get('@btnPrimary').contains('Sign up');
  
      cy.get('.header_logo').as('headerLogo');
      cy.get('@headerLogo').should('be.visible');
  
      cy.get('.header_nav a').as('headerNavA');
      cy.get('@headerNavA').should('be.visible');
      cy.get('@headerNavA').contains('Home');
  
      cy.get('[appscrollto="aboutSection"]').as('aboutSection');
      cy.get('@aboutSection').should('be.visible');
      cy.get('@aboutSection').should('be.enabled');
      cy.get('@aboutSection').contains('About');
  
      cy.get('[appscrollto="contactsSection"]').as('contactsSection');
      cy.get('@contactsSection').should('be.visible');
      cy.get('@contactsSection').should('be.enabled');
      cy.get('@contactsSection').contains('Contacts');
      
      cy.get('[class="header-link -guest"]').as('guestLoginIn');
      cy.get('@guestLoginIn').should('be.visible');
      cy.get('@guestLoginIn').should('be.enabled');
      cy.get('@guestLoginIn').contains('Guest log in');
  
      cy.get('[class="btn btn-outline-white header_signin"]').as('signIn');
      cy.get('@signIn').should('be.visible');
      cy.get('@signIn').should('be.enabled');
      cy.get('@signIn').contains('Sign In')
    });
  
    it('Check footer buttons', () => {
      cy.get('.display-4').as('footerLogo');
      cy.get('@footerLogo').should('be.visible');
      cy.get('@footerLogo').should('not.be.disabled'); 
      cy.get('@footerLogo').contains('ithillel.ua');
  
      
      cy.get('[href="https://www.facebook.com/Hillel.IT.School"]').as('facebookIcon');
      cy.get('@facebookIcon').should('be.visible');
      cy.get('@facebookIcon').should('not.be.disabled'); 
  
      cy.get('[href="https://t.me/ithillel_kyiv"]').as('telegramIcon');
      cy.get('@telegramIcon').should('be.visible');
      cy.get('@telegramIcon').should('not.be.disabled'); 
  
      cy.get('[class="socials_icon icon icon-youtube"]').as('youtubeIcon');
      cy.get('@youtubeIcon').should('be.visible');
      cy.get('@youtubeIcon').should('not.be.disabled'); 
  
      cy.get('[class="socials_icon icon icon-instagram"]').as('instagramIcon');
      cy.get('@instagramIcon').should('be.visible');
      cy.get('@instagramIcon').should('not.be.disabled'); 
  
      cy.get('[class="socials_icon icon icon-linkedin"]').as('linkedIn');
      cy.get('@linkedIn').should('be.visible');
      cy.get('@linkedIn').should('not.be.disabled'); 
  
      cy.get('[href="mailto:developer@ithillel.ua"]').as('support');
      cy.get('@support').should('be.visible');
      cy.get('@support').should('not.be.disabled'); 
      cy.get('@support').contains('support@ithillel.ua');
  });
  });
  
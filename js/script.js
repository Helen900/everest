const modalElement = document.querySelector( '.modal' );
const modalCloseElement = modalElement.querySelector( '.modal__close' );
const modalTrigger = document.querySelector( '.mountains__tours__link' );
const burgerElement = document.querySelector( '.page-title__burger' );
const modalNavElement = document.querySelector( '.page-title__nav' )
const modalCloseNavElement = modalNavElement.querySelector( '.page-title__nav-close' )


const openModal = () => {
    modalElement.classList.add( 'modal--open' );
    document.documentElement.classList.add( 'is-modal-open' );
};

const closeModal = () => {
    modalElement.classList.remove( 'modal--open' );
    document.documentElement.classList.remove( 'is-modal-open' );
};

const openMenu = () => {
    modalNavElement.classList.add( 'page-title__nav--open' );
    document.documentElement.classList.add( 'is-modal-open' );
};
  
const closeMenu = () => {
    modalNavElement.classList.remove( 'page-title__nav--open' );
    document.documentElement.classList.remove( 'is-modal-open' );
};

modalTrigger.addEventListener( 'click', openModal );
modalCloseElement.addEventListener( 'click', closeModal );
document.addEventListener( 'keydown', ( evt ) => {
    if ( evt.key === 'Escape' ) {
      closeModal();
    }
} );

burgerElement.addEventListener( 'click', openMenu );
modalCloseNavElement.addEventListener( 'click', closeMenu );
document.addEventListener( 'keydown', ( evt ) => {
    if ( evt.key === 'Escape' ) {
      closeMenu();
    }
} );

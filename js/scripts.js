/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Interactive invitation steps
    const invitationSteps = document.querySelectorAll('.invite-step');
    const stepButtons = document.querySelectorAll('[data-go-to]');
    const envelopeTrigger = document.querySelector('.envelope-trigger');

    if (invitationSteps.length && stepButtons.length) {
        const showStep = (stepId) => {
            invitationSteps.forEach((step) => {
                const isTarget = step.id === stepId;
                step.hidden = !isTarget;
                step.classList.toggle('is-active', isTarget);
            });
            if (stepId === 'mailbox') {
                envelopeTrigger?.classList.remove('is-opening');
                document.querySelector('.perkins-envelope-step')?.classList.remove('is-open');
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        if (envelopeTrigger) {
            envelopeTrigger.addEventListener('click', (event) => {
                const clickedSeal = event.target.classList.contains('envelope-wax-seal');
                const keyboardActivation = event.detail === 0;
                if (clickedSeal || keyboardActivation) {
                    envelopeTrigger.classList.add('is-opening');
                    document.querySelector('.perkins-envelope-step')?.classList.add('is-open');
                }
            });
        }

        stepButtons.forEach((button) => {
            button.addEventListener('click', () => showStep(button.dataset.goTo));
        });
    }

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

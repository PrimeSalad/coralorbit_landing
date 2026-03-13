        /*
         * File: main.js
         * Description: Handles mobile menu interactions for CoralOrbit.
         * Version: 9.0.0
         */

        const MOBILE_BREAKPOINT = 768;

        const MENU_ICON = `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon_svg h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
        `;

        const CLOSE_ICON = `
            <svg xmlns="http://www.w3.org/2000/svg" class="icon_svg h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
            </svg>
        `;

        const update_menu_icon = (is_open) => {
            const menu_icon = document.getElementById('menu_icon');

            if (!menu_icon) {
                return;
            }

            menu_icon.innerHTML = is_open ? CLOSE_ICON : MENU_ICON;
        };

        const close_mobile_menu = (menu_panel, menu_button) => {
            if (!menu_panel || !menu_button) {
                return;
            }

            menu_panel.classList.add('hidden');
            menu_button.setAttribute('aria-expanded', 'false');
            update_menu_icon(false);
        };

        const initialize_mobile_menu = () => {
            const menu_button = document.getElementById('menu_button');
            const menu_panel = document.getElementById('menu_panel');

            if (!menu_button || !menu_panel) {
                return;
            }

            menu_button.addEventListener('click', () => {
                const is_hidden = menu_panel.classList.toggle('hidden');
                const is_open = !is_hidden;

                menu_button.setAttribute('aria-expanded', String(is_open));
                update_menu_icon(is_open);
            });

            const mobile_links = menu_panel.querySelectorAll('a');

            mobile_links.forEach((link_element) => {
                link_element.addEventListener('click', () => {
                    close_mobile_menu(menu_panel, menu_button);
                });
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth >= MOBILE_BREAKPOINT) {
                    close_mobile_menu(menu_panel, menu_button);
                }
            });
        };

        document.addEventListener('DOMContentLoaded', () => {
            initialize_mobile_menu();
        });
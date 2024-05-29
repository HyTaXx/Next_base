import React from "react";

const NavMenu: React.FC = () => {
    return (
        <div className="drawer z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    <label aria-label="close sidebar" htmlFor="my-drawer">
                        close
                    </label>
                    <ul className="bg-base-200 rounded-box">
                        <li>
                            <a>FAQ</a>
                        </li>
                        <li>
                            <details>
                                <summary>Docs</summary>
                                <ul>
                                    <li>
                                        <a>Installation</a>
                                    </li>
                                    <li>
                                        <a>how to use ?</a>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Components</summary>
                                            <ul>
                                                <li>
                                                    <details>
                                                        <summary>
                                                            User Interaction
                                                        </summary>
                                                        <ul>
                                                            <li>
                                                                <a>Button</a>
                                                            </li>
                                                            <li>
                                                                <a>Link</a>
                                                            </li>
                                                        </ul>
                                                    </details>
                                                </li>
                                                <li>
                                                    <a>Test</a>
                                                </li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavMenu;

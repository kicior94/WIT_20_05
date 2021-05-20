const Navigation = () => {
    const nav = $(document.createElement('nav'));
    nav.attr({
        class: 'navbar navbar-light bg-light'
    });
    const div = $(document.createElement('div'));
    div.attr({
        class: 'container-fluid'
    });
    const span = $(document.createElement('span'));
    span.attr({
        class: 'navbar-brand mb-0 h1'
    });
    span.html('Wirtualna Biblioteka');

    div.append(span);
    nav.append(div);

    return nav;
};

export default Navigation;
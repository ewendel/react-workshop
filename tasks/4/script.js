/*

## Oppgave 4: Mer tilstand: Sanntidsøk

    Lag en komponent Search som tar inn et array items. Elementene i items er på formen { name: "Some string", url: "www.somesite.com" }

    Komponenten skal inneholde et tekstfelt, og endringer i tekstfeltet skal filtrere hvilke av elementene i items som vises. Se under for HTML-struktur:

    <div>
        <input type="text" />
            <ul> 
                return <li><a ...></a></li>
            </ul>
    </div>
    

    Sett også fokus på inputfeltet etter at siden er lastet.

    #### Tips

    Interessante metoder: String.prototype.match, Array.prototype.filter

    Attributter i JSX: onChange, refs, className (da class er et reserved keyword i JS)

*/

var libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];
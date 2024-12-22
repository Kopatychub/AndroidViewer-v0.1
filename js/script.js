const resizer = document.getElementById('resizer');
const leftPane = document.getElementById('code-editor');
const rightPane = document.getElementById('xml-view');
const container = document.getElementById('main-window');

resizer.addEventListener('mousedown', (e) => {
    e.preventDefault();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        const containerRect = container.getBoundingClientRect();
        var newLeftWidth = event.clientX - containerRect.left;

        if (newLeftWidth > 50 && newLeftWidth < containerRect.width - 50) {
            newLeftWidth = (newLeftWidth*100)/containerRect.width;
            if (newLeftWidth > 10 && newLeftWidth < 90){
                leftPane.style.width = `${newLeftWidth}%`;
            }
        }
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
});

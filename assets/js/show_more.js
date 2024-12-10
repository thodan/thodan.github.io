
document.getElementById('more_content').addEventListener('shown.bs.collapse', function () {
    document.getElementById('toggle_button').textContent = 'Show less';
});
document.getElementById('more_content').addEventListener('hidden.bs.collapse', function () {
    document.getElementById('toggle_button').textContent = 'Show more';
});

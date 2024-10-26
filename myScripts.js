const createSnowflake = () => {
    const pageHeight = document.documentElement.scrollHeight;

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 96}vw`;
    snowflake.style.width = `${Math.random() * 10 + 5}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.animationDuration = `${Math.random() * (pageHeight/100) + 5}s`;
    document.body.appendChild(snowflake);
  
    setTimeout(() => {
      snowflake.remove();
    }, pageHeight * 2);
};

setInterval(createSnowflake, 100);

const updatePageHeight = () => {
    // Temporarily hide all snowflakes
    document.querySelectorAll('.snowflake').forEach(snowflake => {
        snowflake.style.display = 'none';
    });

    // Calculate the actual page height
    const pageHeight = document.documentElement.scrollHeight;
    document.documentElement.style.setProperty('--page-height', `${pageHeight}px`);

    // Restore visibility of snowflakes
    document.querySelectorAll('.snowflake').forEach(snowflake => {
        snowflake.style.display = '';
    });
};

// Update the page height on load and resize
window.addEventListener('resize', updatePageHeight);
window.addEventListener('load', updatePageHeight);
updatePageHeight(); // initial call

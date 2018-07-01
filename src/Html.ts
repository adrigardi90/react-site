export const Html = ({ title, description, body}) => (
    `
        <!DOCTYPE html xmlns:og="http://ogp.me/ns#">
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="initial-scale=1, maximum-scale=1">
                <meta name="description" content="${description}”">
                <meta property=”og:title” content=”${title}”/>
                <meta property=”og:description" content=”${description}”/>
                <meta property="og:image" content="https://theagdsite.ga/images/me.jpg"/>
                <title>${title}</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
                <link href="/client/app.css" rel="stylesheet">
                <link href="/client/appStyles.css" rel="stylesheet">
            </head>
        
            <body>
                <div id="root">${body}</div>
            </body>

            <script defer="defer" src="https://code.getmdl.io/1.3.0/material.min.js"></script>
            <script type="text/javascript" src="/client/manifest.js"></script>
            <script type="text/javascript" src="/client/vendor.js"></script>
            <script type="text/javascript" src="/client/babel.js"></script>
            <script type="text/javascript" src="/client/app.js"></script>
            <script type="text/javascript" src="/client/appStyles.js"></script>          
        </html>
      `
)
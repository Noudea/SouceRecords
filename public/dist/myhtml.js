const MyHtml = () => {
    return (
        <>
        <style jsx>{`
            .container {
                width:100%;
                height:800px;
            }
            
            
            `}</style>
            {/* <head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Artistes</title>
		<link rel="shortcut icon" href="favicon.ico">
		<link rel="stylesheet" type="text/css" href="css/base.css" />
		<link rel="stylesheet" type="text/css" href="css/demo1.css" />
		<script>document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");</script>
	</head> */}
            <div className="frame"></div>
            <div className="container">
                <canvas></canvas>
            </div>
            <script
                type="text/javascript"
                src="dist/scripts/index.b6f6b44bc1f988010014.js"
            ></script>
        </>
    )
}

export default MyHtml

<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<link rel="stylesheet" type="text/css" href="Cancion.css" />
			</head>
			<body>
				<h1>Himno del Málaga</h1>
				<h2>
					<xsl:value-of select="Cancion/artista"></xsl:value-of>
				</h2>
				<h2>
					<xsl:value-of select="Cancion/album"></xsl:value-of>
				</h2>
				<h2>
					<xsl:value-of select="Cancion/fechaLanzamiento"></xsl:value-of>
				</h2>
				<h2>
					<xsl:value-of select="Cancion/género"></xsl:value-of>
				</h2>
				<xsl:for-each select="Cancion/estrofa">
					<h3>Estrofa</h3>
					<xsl:for-each select="verso">
					<xsl:value-of select="verso"/><p><span>¡¡ MÁ - LA - GA!! </span><xsl:value-of select="."/></p></xsl:for-each>
					
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
	
	
</xsl:stylesheet>
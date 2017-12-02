<?xml version="1.0" encoding="UTF-8" ?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<body style="font-family:Arial;font-size:12pt;background-color:#EEEEEE;">
<xsl:for-each select="posts/post">
  <div style="max-width: 760px;margin: 0 auto;">
    <div style="background-color:teal;color:white;padding:4px;">
      <span style="font-weight:bold"><xsl:value-of select="title"/></span>
      </div>
    <div style="margin-left:20px;margin-bottom:1em;font-size:10pt">
      <p>
      <xsl:value-of select="body"/>
      <br/>
      <br/>
      <span style="font-style:italic"> published at: <xsl:value-of select="substring(published_at,1,10)"/></span>
      <br/>
       by <b><xsl:value-of select="author"/></b>
      </p>

      <div>
        <xsl:for-each select="tags/tag">
          <span style="background: #039BE5;border-radius: 5px;padding: 5px;margin-left: 5px;color: white;"><xsl:value-of select="name"/></span>
        </xsl:for-each>
      </div>

      <div style="margin-top: 20px;">
        <p style="font-weight: bold;font-size: 16;color: #AD1457;">Attached files:</p>
        <xsl:for-each select="files/image">
          <img style="max-width: 50px;max-height:50px;"><xsl:attribute name="src">../img/<xsl:value-of select="name" /></xsl:attribute></img>
        </xsl:for-each>
        <br/>
        <br/>
        <xsl:for-each select="files/audio">
          <a><xsl:attribute name="href">../audio/<xsl:value-of select="name" /></xsl:attribute>Audio file: <xsl:value-of select="name"/></a>
          <br/>
        </xsl:for-each>
      </div>

      <div style="margin-left: 10px;">
        <p style="font-weight: bold;font-size: 16;color: #1A237E;">Comments:</p>
        <xsl:for-each select="comments/comment">
          <p>
            <b><xsl:value-of select="author"/></b>
            <i> wrote at </i>
            <i><xsl:value-of select="substring(published_at,1,10)"/> </i>
            <br/>
            <xsl:value-of select="text"/>
            <hr/>
          </p>
        </xsl:for-each>
      </div>
    </div>
  </div>
</xsl:for-each>
</body>
</html>

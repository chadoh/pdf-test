import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div ref={div => this.app = div} className="App">
        <header className="App-header">
          <h1>PDF Test</h1>
          <button onClick={() => window.saveAsPdf(this.app, 'react-app')}>
            Save this page as a PDF!
          </button>
        </header>
        <div id="toc" >
          <h2>Contents</h2>
          <ul>
            <li ><a href="#History_and_standardization"><span >1</span> <span >History and standardization</span></a></li>
            <li ><a href="#Technical_foundations"><span >2</span> <span >Technical foundations</span></a>
              <ul>
                <li ><a href="#PostScript"><span >2.1</span> <span >PostScript</span></a></li>
              </ul>
            </li>
            <li ><a href="#Technical_overview"><span >3</span> <span >Technical overview</span></a>
              <ul>
                <li ><a href="#File_structure"><span >3.1</span> <span >File structure</span></a></li>
                <li ><a href="#Imaging_model"><span >3.2</span> <span >Imaging model</span></a>
                  <ul>
                    <li ><a href="#Vector_graphics"><span >3.2.1</span> <span >Vector graphics</span></a></li>
                    <li ><a href="#Raster_images"><span >3.2.2</span> <span >Raster images</span></a></li>
                    <li ><a href="#Text"><span >3.2.3</span> <span >Text</span></a>
                      <ul>
                        <li ><a href="#Fonts"><span >3.2.3.1</span> <span >Fonts</span></a></li>
                        <li ><a href="#Standard_Type_1_Fonts_.28Standard_14_Fonts.29"><span >3.2.3.2</span> <span >Standard Type 1 Fonts (Standard 14 Fonts)</span></a></li>
                        <li ><a href="#Encodings"><span >3.2.3.3</span> <span >Encodings</span></a></li>
                      </ul>
                    </li>
                    <li ><a href="#Transparency"><span >3.2.4</span> <span >Transparency</span></a></li>
                  </ul>
                </li>
                <li ><a href="#Interactive_elements"><span >3.3</span> <span >Interactive elements</span></a>
                  <ul>
                    <li ><a href="#AcroForms"><span >3.3.1</span> <span >AcroForms</span></a>
                      <ul>
                        <li ><a href="#Forms_Data_Format_.28FDF.29"><span >3.3.1.1</span> <span >Forms Data Format (FDF)</span></a></li>
                        <li ><a href="#XML_Forms_Data_Format_.28XFDF.29"><span >3.3.1.2</span> <span >XML Forms Data Format (XFDF)</span></a></li>
                      </ul>
                    </li>
                    <li ><a href="#Adobe_XML_Forms_Architecture_.28XFA.29"><span >3.3.2</span> <span >Adobe XML Forms Architecture (XFA)</span></a></li>
                  </ul>
                </li>
                <li ><a href="#Logical_structure_and_accessibility"><span >3.4</span> <span >Logical structure and accessibility</span></a></li>
                <li ><a href="#Optional_Content_Groups_.28layers.29"><span >3.5</span> <span >Optional Content Groups (layers)</span></a></li>
                <li ><a href="#Security_and_signatures"><span >3.6</span> <span >Security and signatures</span></a>
                  <ul>
                    <li ><a href="#Usage_rights"><span >3.6.1</span> <span >Usage rights</span></a></li>
                  </ul>
                </li>
                <li ><a href="#File_attachments"><span >3.7</span> <span >File attachments</span></a></li>
                <li ><a href="#Metadata"><span >3.8</span> <span >Metadata</span></a></li>
              </ul>
            </li>
            <li ><a href="#Intellectual_property"><span >4</span> <span >Intellectual property</span></a></li>
            <li ><a href="#Technical_issues"><span >5</span> <span >Technical issues</span></a>
              <ul>
                <li ><a href="#Accessibility"><span >5.1</span> <span >Accessibility</span></a></li>
                <li ><a href="#Viruses_and_exploits"><span >5.2</span> <span >Viruses and exploits</span></a></li>
                <li ><a href="#Usage_restrictions_and_monitoring"><span >5.3</span> <span >Usage restrictions and monitoring</span></a></li>
                <li ><a href="#Default_display_settings"><span >5.4</span> <span >Default display settings</span></a></li>
              </ul>
            </li>
            <li ><a href="#Content"><span >6</span> <span >Content</span></a></li>
            <li ><a href="#Software"><span >7</span> <span >Software</span></a>
              <ul>
                <li ><a href="#Editing"><span >7.1</span> <span >Editing</span></a></li>
                <li ><a href="#Annotation"><span >7.2</span> <span >Annotation</span></a></li>
                <li ><a href="#Other"><span >7.3</span> <span >Other</span></a></li>
              </ul>
            </li>
            <li ><a href="#See_also"><span >8</span> <span >See also</span></a></li>
            <li ><a href="#References"><span >9</span> <span >References</span></a></li>
            <li ><a href="#Further_reading"><span >10</span> <span >Further reading</span></a></li>
            <li ><a href="#External_links"><span >11</span> <span >External links</span></a></li>
          </ul>
        </div>
        <p></p>

        <h2><span  id="History_and_standardization">History and standardization</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=1" title="Edit section: History and standardization">edit</a><span >]</span></span></h2>
        <div role="note" >
          Main article: <a href="/wiki/History_and_standardization_of_Portable_Document_Format" title="History and standardization of Portable Document Format">History and standardization of Portable Document Format</a></div>
        <p>PDF was developed in the early 1990s<sup id="cite_ref-4" ><a href="#cite_note-4">[4]</a></sup> as a way to share computer documents, including text formatting and inline images.<sup id="cite_ref-5" ><a href="#cite_note-5">[5]</a></sup> It was among a number of competing formats such as <a href="/wiki/DjVu" title="DjVu">DjVu</a>, <a href="/wiki/Envoy_(WordPerfect)" title="Envoy (WordPerfect)">Envoy</a>, Common Ground Digital Paper, Farallon Replica and even <a href="/wiki/Adobe_Systems" title="Adobe Systems">Adobe</a>'s own <a href="/wiki/PostScript" title="PostScript">PostScript</a> format. In those early years before the rise of the <a href="/wiki/World_Wide_Web" title="World Wide Web">World Wide Web</a> and <a href="/wiki/HTML" title="HTML">HTML</a> documents, PDF was popular mainly in <a href="/wiki/Desktop_publishing" title="Desktop publishing">desktop publishing</a> <a href="/wiki/Workflow" title="Workflow">workflows</a>. Adobe Systems made the PDF specification available free of charge in 1993. PDF was a <a href="/wiki/Proprietary_format" title="Proprietary format">proprietary format</a> controlled by Adobe, until it was officially released as an <a href="/wiki/Open_standard" title="Open standard">open standard</a> on July 1, 2008, and published by the <a href="/wiki/International_Organization_for_Standardization" title="International Organization for Standardization">International Organization for Standardization</a> as ISO 32000-1:2008,<sup id="cite_ref-iso-standard_6-0" ><a href="#cite_note-iso-standard-6">[6]</a></sup><sup id="cite_ref-7" ><a href="#cite_note-7">[7]</a></sup> at which time control of the specification passed to an ISO Committee of volunteer industry experts. In 2008, Adobe published a Public Patent License to ISO 32000-1 granting <a href="/wiki/Royalty-free" title="Royalty-free">royalty-free</a> rights for all patents owned by Adobe that are necessary to make, use, sell, and distribute PDF compliant implementations.<sup id="cite_ref-8" ><a href="#cite_note-8">[8]</a></sup></p>
        <p>However, there are still some proprietary technologies defined only by Adobe, such as <a href="/wiki/XFA" title="XFA">Adobe XML Forms Architecture</a> (XFA) and <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a> extension for Acrobat, which are referenced by ISO 32000-1 as <a href="/wiki/Normative" title="Normative">normative</a> and indispensable for the application of the ISO 32000-1 specification. These proprietary technologies are not standardized and their specification is published only on Adobe’s website.<sup id="cite_ref-9" ><a href="#cite_note-9">[9]</a></sup><sup id="cite_ref-iso-meeting-n603_10-0" ><a href="#cite_note-iso-meeting-n603-10">[10]</a></sup><sup id="cite_ref-11" ><a href="#cite_note-11">[11]</a></sup><sup id="cite_ref-rosenthol-adobe-2012_12-0" ><a href="#cite_note-rosenthol-adobe-2012-12">[12]</a></sup><sup id="cite_ref-13" ><a href="#cite_note-13">[13]</a></sup> Many of them are also not supported by popular third-party implementations of PDF.</p>
        <p>On July 28, 2017, ISO 32000-2 was published by the ISO. ISO 32000-2 does not include any proprietary technologies as normative references. <sup id="cite_ref-14" ><a href="#cite_note-14">[14]</a></sup></p>

        <h2><span  id="Technical_foundations">Technical foundations</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=2" title="Edit section: Technical foundations">edit</a><span >]</span></span></h2>
        <p>The PDF combines three technologies:</p>
        <ul>
          <li>A subset of the <a href="/wiki/PostScript" title="PostScript">PostScript</a> page description programming language, for generating the layout and graphics.</li>
          <li>A <a href="/wiki/Font_embedding" title="Font embedding">font-embedding</a>/replacement system to allow fonts to travel with the documents.</li>
          <li>A structured storage system to bundle these elements and any associated content into a single file, with <a href="/wiki/Data_compression" title="Data compression">data compression</a> where appropriate.</li>
        </ul>
        <h3><span  id="PostScript">PostScript</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=3" title="Edit section: PostScript">edit</a><span >]</span></span></h3>
        <p><a href="/wiki/PostScript" title="PostScript">PostScript</a> is a <a href="/wiki/Page_description_language" title="Page description language">page description language</a> run in an <a href="/wiki/Interpreter_(computing)" title="Interpreter (computing)">interpreter</a> to generate an image, a process requiring many resources. It can handle graphics and standard features of <a href="/wiki/Programming_language" title="Programming language">programming languages</a> such as <code>if</code> and <code>loop</code> commands. PDF is largely based on PostScript but simplified to remove flow control features like these, while graphics commands such as <code>lineto</code> remain.</p>
        <p>Often, the PostScript-like PDF code is generated from a source PostScript file. The graphics commands that are output by the PostScript code are collected and <a href="/wiki/Lexical_analysis" title="Lexical analysis">tokenized</a>. Any files, graphics, or fonts to which the document refers also are collected. Then, everything is compressed to a single file. Therefore, the entire PostScript world (fonts, layout, measurements) remains intact.</p>
        <p>As a document format, PDF has several advantages over PostScript:</p>
        <ul>
          <li>PDF contains tokenized and interpreted results of the PostScript source code, for direct correspondence between changes to items in the PDF page description and changes to the resulting page appearance.</li>
          <li>PDF (from version 1.4) supports <a href="/wiki/Transparency_(graphic)" title="Transparency (graphic)">graphic transparency</a>; PostScript does not.</li>
          <li>PostScript is an <a href="/wiki/Interpreted_programming_language"  title="Interpreted programming language">interpreted programming language</a> with an implicit global state, so instructions accompanying the description of one page can affect the appearance of any following page. Therefore, all preceding pages in a PostScript document must be processed to determine the correct appearance of a given page, whereas each page in a PDF document is unaffected by the others. As a result, PDF viewers allow the user to quickly jump to the final pages of a long document, whereas a PostScript viewer needs to process all pages sequentially before being able to display the destination page (unless the optional PostScript <a href="/wiki/Document_Structuring_Conventions" title="Document Structuring Conventions">Document Structuring Conventions</a> have been carefully complied with).</li>
        </ul>

        <h2><span  id="Technical_overview">Technical overview</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=4" title="Edit section: Technical overview">edit</a><span >]</span></span></h2>
        <h3><span  id="File_structure">File structure</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=5" title="Edit section: File structure">edit</a><span >]</span></span></h3>
        <p>A PDF file is a 7-bit ASCII file, except for certain elements that may have binary content. A PDF file starts with a header containing the <a href="/wiki/Magic_number_(programming)" title="Magic number (programming)">magic number</a> and the version of the format such as <code>%PDF-1.7</code>. The format is a subset of a COS ("Carousel" Object Structure) format.<sup id="cite_ref-15" ><a href="#cite_note-15">[15]</a></sup> A COS tree file consists primarily of <i>objects</i>, of which there are eight types:<sup id="cite_ref-16" ><a href="#cite_note-16">[16]</a></sup></p>
        <ul>
          <li><a href="/wiki/Boolean_data_type" title="Boolean data type">Boolean</a> values, representing <i>true</i> or <i>false</i></li>
          <li>Numbers</li>
          <li><a href="/wiki/String_(computer_science)" title="String (computer science)">Strings</a>, enclosed within parentheses (<code>(...)</code>), may contain 8-bit characters.</li>
          <li>Names, starting with a forward slash (<code>/</code>)</li>
          <li><a href="/wiki/Array_data_type" title="Array data type">Arrays</a>, ordered collections of objects enclosed within square brackets (<code>[...]</code>)</li>
          <li><a href="/wiki/Dictionary_(data_structure)"  title="Dictionary (data structure)">Dictionaries</a>, collections of objects indexed by Names enclosed within double pointy brackets (<code>&lt;&lt;...&gt;&gt;</code>)</li>
          <li><a href="/wiki/Stream_(computing)" title="Stream (computing)">Streams</a>, usually containing large amounts of data, which can be compressed and binary</li>
          <li>The <a href="/wiki/Pointer_(computer_programming)" title="Pointer (computer programming)">null</a> object</li>
        </ul>
        <p>Furthermore, there may be comments, introduced with the percent sign (<code>%</code>). Comments may contain 8-bit characters.</p>
        <p>Objects may be either <i>direct</i> (embedded in another object) or <i>indirect</i>. Indirect objects are numbered with an <i>object number</i> and a <i>generation number</i> and defined between the <code>obj</code> and <code>endobj</code> keywords. An index table, also called the cross-reference table and marked with the <code>xref</code> keyword, follows the main body and gives the byte offset of each indirect object from the start of the file.<sup id="cite_ref-17" ><a href="#cite_note-17">[17]</a></sup> This design allows for efficient <a href="/wiki/Random_access" title="Random access">random access</a> to the objects in the file, and also allows for small changes to be made without rewriting the entire file (<i>incremental update</i>). Beginning with PDF version 1.5, indirect objects may also be located in special streams known as <i>object streams</i>. This technique reduces the size of files that have large numbers of small indirect objects and is especially useful for <i>Tagged PDF</i>.</p>
        <p>At the end of a PDF file is a trailer introduced with the <code>trailer</code> keyword. It contains</p>
        <ul>
          <li>A dictionary</li>
          <li>An offset to the start of the cross-reference table (the table starting with the <code>xref</code> keyword)</li>
          <li>And the <code>%%EOF</code> <a href="/wiki/End-of-file" title="End-of-file">end-of-file</a> marker.</li>
        </ul>
        <p>The dictionary contains</p>
        <ul>
          <li>A reference to the root object of the tree structure, also known as the <i>catalog</i></li>
          <li>The count of indirect objects in the cross-reference table</li>
          <li>And other optional information.</li>
        </ul>
        <p>There are two layouts to the PDF files: non-linear (not "optimized") and linear ("optimized"). Non-linear PDF files consume less disk space than their linear counterparts, though they are slower to access because portions of the data required to assemble pages of the document are scattered throughout the PDF file. Linear PDF files (also called "optimized" or "web optimized" PDF files) are constructed in a manner that enables them to be read in a Web browser plugin without waiting for the entire file to download, since they are written to disk in a linear (as in page order) fashion.<sup id="cite_ref-pdf-ref_18-0" ><a href="#cite_note-pdf-ref-18">[18]</a></sup> PDF files may be optimized using <a href="/wiki/Adobe_Acrobat" title="Adobe Acrobat">Adobe Acrobat</a> software or <a href="/wiki/QPDF" title="QPDF">QPDF</a>.</p>
        <h3><span  id="Imaging_model">Imaging model</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=6" title="Edit section: Imaging model">edit</a><span >]</span></span></h3>
        <p>The basic design of how <a href="/wiki/Graphics" title="Graphics">graphics</a> are represented in PDF is very similar to that of PostScript, except for the use of <a href="/wiki/Transparency_(graphic)" title="Transparency (graphic)">transparency</a>, which was added in PDF 1.4.</p>
        <p>PDF graphics use a <a href="/wiki/Device_independence" title="Device independence">device-independent</a> <a href="/wiki/Cartesian_coordinate_system" title="Cartesian coordinate system">Cartesian coordinate system</a> to describe the surface of a page. A PDF page description can use a <a href="/wiki/Matrix_(mathematics)" title="Matrix (mathematics)">matrix</a> to <a href="/wiki/Scale_(ratio)" title="Scale (ratio)">scale</a>, <a href="/wiki/Rotate"  title="Rotate">rotate</a>, or <a href="/wiki/Shear_mapping" title="Shear mapping">skew</a> graphical elements. A key concept in PDF is that of the <i>graphics state</i>, which is a collection of graphical parameters that may be changed, saved, and restored by a <i>page description</i>. PDF has (as of version 1.6) 24 graphics state properties, of which some of the most important are:</p>
        <ul>
          <li>The <i>current transformation matrix</i> (CTM), which determines the coordinate system</li>
          <li>The <i><a href="/wiki/Clipping_path" title="Clipping path">clipping path</a></i></li>
          <li>The <i><a href="/wiki/Color_space" title="Color space">color space</a></i></li>
          <li>The <i><a href="/wiki/Alpha_compositing" title="Alpha compositing">alpha constant</a></i>, which is a key component of transparency</li>
        </ul>
        <h4><span  id="Vector_graphics">Vector graphics</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=7" title="Edit section: Vector graphics">edit</a><span >]</span></span></h4>
        <p>As in PostScript, <a href="/wiki/Vector_graphics" title="Vector graphics">vector graphics</a> in PDF are constructed with <i>paths</i>. Paths are usually composed of lines and cubic <a href="/wiki/B%C3%A9zier_curve" title="Bézier curve">Bézier curves</a>, but can also be constructed from the outlines of text. Unlike PostScript, PDF does not allow a single path to mix text outlines with lines and curves. Paths can be stroked, filled, <a href="/wiki/Clipping_path" title="Clipping path">clipping</a>. Strokes and fills can use any color set in the graphics state, including <i>patterns</i>.</p>
        <p>PDF supports several types of patterns. The simplest is the <i>tiling pattern</i> in which a piece of artwork is specified to be drawn repeatedly. This may be a <i>colored tiling pattern</i>, with the colors specified in the pattern object, or an <i>uncolored tiling pattern</i>, which defers color specification to the time the pattern is drawn. Beginning with PDF 1.3 there is also a <i>shading pattern</i>, which draws continuously varying colors. There are seven types of shading pattern of which the simplest are the <i>axial shade</i> (Type 2) and <i>radial shade</i> (Type 3).</p>
        <h4><span  id="Raster_images">Raster images</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=8" title="Edit section: Raster images">edit</a><span >]</span></span></h4>
        <p><a href="/wiki/Raster_graphics" title="Raster graphics">Raster images</a> in PDF (called <i>Image XObjects</i>) are represented by dictionaries with an associated stream. The dictionary describes properties of the image, and the stream contains the image data. (Less commonly, a raster image may be embedded directly in a page description as an <i>inline image</i>.) Images are typically <i>filtered</i> for compression purposes. Image filters supported in PDF include the general purpose filters</p>
        <ul>
          <li><b>ASCII85Decode</b> a filter used to put the stream into 7-bit <a href="/wiki/ASCII" title="ASCII">ASCII</a></li>
          <li><b>ASCIIHexDecode</b> similar to ASCII85Decode but less compact</li>
          <li><b>FlateDecode</b> a commonly used filter based on the <a href="/wiki/Deflate"  title="Deflate">deflate</a> algorithm defined in <a  rel="nofollow" href="//tools.ietf.org/html/rfc1951">RFC 1951</a> (deflate is also used in the <a href="/wiki/Gzip" title="Gzip">gzip</a>, <a href="/wiki/Portable_Network_Graphics" title="Portable Network Graphics">PNG</a>, and <a href="/wiki/ZIP_(file_format)"  title="ZIP (file format)">zip</a> file formats among others); introduced in PDF 1.2; it can use one of two groups of predictor functions for more compact zlib/deflate compression: <i>Predictor 2</i> from the <a href="/wiki/TIFF" title="TIFF">TIFF</a> 6.0 specification and predictors (filters) from the <a href="/wiki/Portable_Network_Graphics" title="Portable Network Graphics">PNG</a> specification (<a  rel="nofollow" href="//tools.ietf.org/html/rfc2083">RFC 2083</a>)</li>
          <li><b>LZWDecode</b> a filter based on <a href="/wiki/LZW"  title="LZW">LZW</a> Compression; it can use one of two groups of predictor functions for more compact LZW compression: <i>Predictor 2</i> from the TIFF 6.0 specification and predictors (filters) from the PNG specification</li>
          <li><b>RunLengthDecode</b> a simple compression method for streams with repetitive data using the <a href="/wiki/Run-length_encoding" title="Run-length encoding">run-length encoding</a> algorithm and the image-specific filters</li>
          <li><b>DCTDecode</b> a <a href="/wiki/Lossy"  title="Lossy">lossy</a> filter based on the <a href="/wiki/JPEG" title="JPEG">JPEG</a> standard</li>
          <li><b>CCITTFaxDecode</b> a <a href="/wiki/Lossless"  title="Lossless">lossless</a> <a href="/wiki/Bi-level_image"  title="Bi-level image">bi-level</a> (black/white) filter based on the Group 3 or <a href="/wiki/Group_4_compression" title="Group 4 compression">Group 4</a> <a href="/wiki/CCITT"  title="CCITT">CCITT</a> (ITU-T) <a href="/wiki/Fax" title="Fax">fax</a> compression standard defined in ITU-T <a href="/wiki/T.4"  title="T.4">T.4</a> and T.6</li>
          <li><b>JBIG2Decode</b> a lossy or lossless bi-level (black/white) filter based on the <a href="/wiki/JBIG2" title="JBIG2">JBIG2</a> standard, introduced in PDF 1.4</li>
          <li><b>JPXDecode</b> a lossy or lossless filter based on the <a href="/wiki/JPEG_2000" title="JPEG 2000">JPEG 2000</a> standard, introduced in PDF 1.5</li>
        </ul>
        <p>Normally all image content in a PDF is embedded in the file. But PDF allows image data to be stored in external files by the use of <i>external streams</i> or <i>Alternate Images</i>. Standardized subsets of PDF, including <a href="/wiki/PDF/A" title="PDF/A">PDF/A</a> and <a href="/wiki/PDF/X" title="PDF/X">PDF/X</a>, prohibit these features.</p>
        <h4><span  id="Text">Text</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=9" title="Edit section: Text">edit</a><span >]</span></span></h4>
        <p>Text in PDF is represented by <i>text elements</i> in page content streams. A text element specifies that <i>characters</i> should be drawn at certain positions. The characters are specified using the <i>encoding</i> of a selected <i>font resource</i>.</p>
        <h5><span  id="Fonts">Fonts</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=10" title="Edit section: Fonts">edit</a><span >]</span></span></h5>
        <p>A font object in PDF is a description of a digital <a href="/wiki/Typeface" title="Typeface">typeface</a>. It may either describe the characteristics of a typeface, or it may include an embedded <i>font file</i>. The latter case is called an <i>embedded font</i> while the former is called an <i>unembedded font</i>. The font files that may be embedded are based on widely used standard digital font formats: <b><a href="/wiki/PostScript_fonts" title="PostScript fonts">Type 1</a></b> (and its compressed variant <b>CFF</b>), <b><a href="/wiki/TrueType" title="TrueType">TrueType</a></b>, and (beginning with PDF 1.6) <b><a href="/wiki/OpenType" title="OpenType">OpenType</a></b>. Additionally PDF supports the <b>Type 3</b> variant in which the components of the font are described by PDF graphic operators.</p>
        <h5><span id="Standard_Type_1_Fonts_(Standard_14_Fonts)"></span><span  id="Standard_Type_1_Fonts_.28Standard_14_Fonts.29">Standard Type 1 Fonts (Standard 14 Fonts)</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=11" title="Edit section: Standard Type 1 Fonts (Standard 14 Fonts)">edit</a><span >]</span></span></h5>
        <p>Fourteen typefaces, known as the <i>standard 14 fonts</i>, have a special significance in PDF documents:</p>
        <ul>
          <li><a href="/wiki/Times_Roman"  title="Times Roman">Times</a> (v3) (in regular, italic, bold, and bold italic)</li>
          <li><a href="/wiki/Courier_(typeface)" title="Courier (typeface)">Courier</a> (in regular, oblique, bold and bold oblique)</li>
          <li><a href="/wiki/Helvetica" title="Helvetica">Helvetica</a> (v3) (in regular, oblique, bold and bold oblique)</li>
          <li><a href="/wiki/Symbol_(typeface)" title="Symbol (typeface)">Symbol</a></li>
          <li><a href="/wiki/Zapf_Dingbats" title="Zapf Dingbats">Zapf Dingbats</a></li>
        </ul>
        <p>These fonts are sometimes called the <i>base fourteen fonts</i>.<sup id="cite_ref-19" ><a href="#cite_note-19">[19]</a></sup> These fonts, or suitable substitute fonts with the same metrics, should be available in most PDF readers. However, since Adobe Acrobat version 6, most of these fonts are not <i>guaranteed</i> to be available in the reader, and may only display correctly if the system has them installed.<sup id="cite_ref-aquarium_20-0" ><a href="#cite_note-aquarium-20">[20]</a></sup> Fonts may be substituted if they are not embedded in a PDF.</p>
        <h5><span  id="Encodings">Encodings</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=12" title="Edit section: Encodings">edit</a><span >]</span></span></h5>
        <p>Within text strings, characters are shown using <i>character codes</i> (integers) that map to glyphs in the current font using an <i>encoding</i>. There are a number of predefined encodings, including <i>WinAnsi</i>, <i>MacRoman</i>, and a large number of encodings for East Asian languages, and a font can have its own built-in encoding. (Although the WinAnsi and MacRoman encodings are derived from the historical properties of the <a href="/wiki/Microsoft_Windows" title="Microsoft Windows">Windows</a> and <a href="/wiki/Macintosh" title="Macintosh">Macintosh</a> operating systems, fonts using these encodings work equally well on any platform.) PDF can specify a predefined encoding to use, the font's built-in encoding or provide a lookup table of differences to a predefined or built-in encoding (not recommended with TrueType fonts).<sup id="cite_ref-21" ><a href="#cite_note-21">[21]</a></sup> The encoding mechanisms in PDF were designed for Type 1 fonts, and the rules for applying them to TrueType fonts are complex.</p>
        <p>For large fonts or fonts with non-standard glyphs, the special encodings <i>Identity-H</i> (for horizontal writing) and <i>Identity-V</i> (for vertical) are used. With such fonts it is necessary to provide a <i>ToUnicode</i> table if semantic information about the characters is to be preserved.</p>
        <h4><span  id="Transparency">Transparency</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=13" title="Edit section: Transparency">edit</a><span >]</span></span></h4>
        <p>The original imaging model of PDF was, like PostScript's, <i>opaque</i>: each object drawn on the page completely replaced anything previously marked in the same location. In PDF 1.4 the imaging model was extended to allow transparency. When transparency is used, new objects interact with previously marked objects to produce blending effects. The addition of transparency to PDF was done by means of new extensions that were designed to be ignored in products written to the PDF 1.3 and earlier specifications. As a result, files that use a small amount of transparency might view acceptably in older viewers, but files making extensive use of transparency could be viewed incorrectly in an older viewer without warning.</p>
        <p>The transparency extensions are based on the key concepts of <i>transparency groups</i>, <i>blending modes</i>, <i>shape</i>, and <i>alpha</i>. The model is closely aligned with the features of <a href="/wiki/Adobe_Illustrator" title="Adobe Illustrator">Adobe Illustrator</a> version 9. The blend modes were based on those used by <a href="/wiki/Adobe_Photoshop" title="Adobe Photoshop">Adobe Photoshop</a> at the time. When the PDF 1.4 specification was published, the formulas for calculating blend modes were kept secret by Adobe. They have since been published.<sup id="cite_ref-22" ><a href="#cite_note-22">[22]</a></sup></p>
        <p>The concept of a transparency group in PDF specification is independent of existing notions of "group" or "layer" in applications such as Adobe Illustrator. Those groupings reflect logical relationships among objects that are meaningful when editing those objects, but they are not part of the imaging model.</p>
        <h3><span  id="Interactive_elements">Interactive elements</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=14" title="Edit section: Interactive elements">edit</a><span >]</span></span></h3>
        <p>PDF files may contain interactive elements such as annotations, form fields, video and Flash animation.</p>
        <p><b>Rich Media PDF</b> is a term that is used to describe interactive content that can be embedded or linked to inside of a PDF. This content must be produced using the Flash file format. When Adobe bought Macromedia, the jewel of the company was Flash, and the Flash player was embedded inside Adobe Acrobat and Adobe Reader, removing the need for third-party plug-ins such as Flash, QuickTime, or Windows Media. Unfortunately, this caused a rift with Apple as QuickTime video was prohibited from PDF. <a href="/wiki/Rich_Media"  title="Rich Media">Rich Media</a> expert <a href="/wiki/Bob_Connolly_(Canadian_film_director)#Books.2C_eBooks_and_Magazine_Articles" title="Bob Connolly (Canadian film director)">Robert Connolly</a> believes this event triggered the war between Apple and Adobe over the Flash iPhone/iPad dispute. Rich Media PDF will not operate in Apple's iOS devices such as the iPad, and interactivity is limited.</p>
        <p><b>Interactive Forms</b> is a mechanism to add forms to the PDF file format.</p>
        <p>PDF currently supports two different methods for integrating data and PDF forms. Both formats today coexist in PDF specification:<sup id="cite_ref-iso32000_23-0" ><a href="#cite_note-iso32000-23">[23]</a></sup><sup id="cite_ref-24" ><a href="#cite_note-24">[24]</a></sup><sup id="cite_ref-25" ><a href="#cite_note-25">[25]</a></sup><sup id="cite_ref-26" ><a href="#cite_note-26">[26]</a></sup></p>
        <ul>
          <li><b>AcroForms</b> (also known as <b>Acrobat forms</b>), introduced in the PDF 1.2 format specification and included in all later PDF specifications.</li>
          <li><b><a href="/wiki/XML_Forms_Architecture"  title="XML Forms Architecture">Adobe XML Forms Architecture</a> (XFA)</b> forms, introduced in the PDF 1.5 format specification. The XFA specification is not included in the PDF specification, it is only referenced as an optional feature. Adobe XFA Forms are not compatible with AcroForms.<sup id="cite_ref-27" ><a href="#cite_note-27">[27]</a></sup></li>
        </ul>
        <h4><span  id="AcroForms">AcroForms</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=15" title="Edit section: AcroForms">edit</a><span >]</span></span></h4>
        <p>AcroForms were introduced in the PDF 1.2 format. AcroForms permit using objects (<i>e.g.</i> <a href="/wiki/Text_box" title="Text box">text boxes</a>, <a href="/wiki/Radio_button" title="Radio button">Radio buttons</a>, <i>etc.</i>) and some code (<i>e.g.</i> <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a>).</p>
        <p>Alongside the standard PDF action types, interactive forms (AcroForms) support submitting, resetting, and importing data. The "submit" action transmits the names and values of selected interactive form fields to a specified uniform resource locator (URL). Interactive form field names and values may be submitted in any of the following formats, (depending on the settings of the action’s ExportFormat, SubmitPDF, and XFDF flags):<sup id="cite_ref-iso32000_23-1" ><a href="#cite_note-iso32000-23">[23]</a></sup></p>
        <ul>
          <li>HTML Form format (HTML 4.01 Specification since PDF 1.5; HTML 2.0 since 1.2)</li>
          <li>Forms Data Format (FDF)</li>
          <li>XML Forms Data Format (XFDF) (external XML Forms Data Format Specification, Version 2.0; supported since PDF 1.5; it replaced the "XML" form submission format defined in PDF 1.4)</li>
          <li>PDF (the entire document can be submitted rather than individual fields and values). (defined in PDF 1.4)</li>
        </ul>
        <p>AcroForms can keep form field values in external stand-alone files containing key:value pairs. The external files may use Forms Data Format (FDF) and XML Forms Data Format (XFDF) files.<sup id="cite_ref-28" ><a href="#cite_note-28">[28]</a></sup><sup id="cite_ref-xfdf_29-0" ><a href="#cite_note-xfdf-29">[29]</a></sup><sup id="cite_ref-fdf-exchange_30-0" ><a href="#cite_note-fdf-exchange-30">[30]</a></sup> The usage rights (UR) signatures define rights for import form data files in FDF, XFDF and text (<a href="/wiki/Comma-separated_values" title="Comma-separated values">CSV</a>/<a href="/wiki/Delimiter-separated_values" title="Delimiter-separated values">TSV</a>) formats, and export form data files in FDF and XFDF formats.<sup id="cite_ref-iso32000_23-2" ><a href="#cite_note-iso32000-23">[23]</a></sup></p>
        <h5><span id="Forms_Data_Format_(FDF)"></span><span  id="Forms_Data_Format_.28FDF.29">Forms Data Format (FDF)</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=16" title="Edit section: Forms Data Format (FDF)">edit</a><span >]</span></span></h5>
        <table  >
          <caption >Forms Data Format (FDF)</caption>
          <tbody>
            <tr>
              <th scope="row" ><a href="/wiki/Filename_extension" title="Filename extension">Filename extension</a></th>
              <td ><code>.fdf</code></td>
            </tr>
            <tr>
              <th scope="row" ><a href="/wiki/Media_type" title="Media type">Internet media&#160;type</a></th>
              <td ><code>application/vnd.fdf<sup id="cite_ref-31" ><a href="#cite_note-31">[31]</a></sup></code></td>
            </tr>
            <tr>
              <th scope="row" ><a href="/wiki/Type_code" title="Type code">Type code</a></th>
              <td >'FDF'</td>
            </tr>
            <tr>
              <th scope="row" >Developed&#160;by</th>
              <td ><a href="/wiki/Adobe_Systems" title="Adobe Systems">Adobe Systems</a></td>
            </tr>
            <tr>
              <th scope="row" >Initial release</th>
              <td >1996<span >&#160;(<span >1996</span>)</span> (PDF 1.2)</td>
            </tr>
            <tr>
              <th scope="row" >Extended&#160;from</th>
              <td >PDF</td>
            </tr>
            <tr>
              <th scope="row" >Extended&#160;to</th>
              <td >XFDF</td>
            </tr>
            <tr>
              <th scope="row" ><a href="/wiki/International_standard" title="International standard">Standard</a></th>
              <td >ISO 32000-1:2008</td>
            </tr>
            <tr>
              <th scope="row" ><span ><a href="/wiki/Open_format" title="Open format">Open format</a>?</span></th>
              <td >Yes</td>
            </tr>
          </tbody>
        </table>
        <p>The Forms Data Format (FDF) is based on PDF, it uses the same syntax and has essentially the same file structure, but is much simpler than PDF, since the body of an FDF document consists of only one required object. Forms Data Format is defined in the PDF specification (since PDF 1.2). The Forms Data Format can be used when submitting form data to a server, receiving the response, and incorporating into the interactive form. It can also be used to export form data to stand-alone files that can be imported back into the corresponding PDF interactive form. Beginning in PDF 1.3, FDF can be used to define a container for annotations that are separate from the PDF document they apply to. FDF typically encapsulates information such as <a href="/wiki/X.509" title="X.509">X.509 certificates</a>, requests for certificates, directory settings, timestamp server settings, and embedded PDF files for network transmission.<sup id="cite_ref-fdf-exchange_30-1" ><a href="#cite_note-fdf-exchange-30">[30]</a></sup> The FDF uses the MIME content type application/vnd.fdf, filename extension .fdf and on Mac OS it uses file type 'FDF'.<sup id="cite_ref-iso32000_23-3" ><a href="#cite_note-iso32000-23">[23]</a></sup> Support for importing and exporting FDF stand-alone files is not widely implemented in free or freeware PDF software. For example, there is no import/export support in Evince, Okular, Poppler, KPDF or Sumatra PDF, however, Evince, Okular and Poppler support filling in of PDF Acroforms and saving filled data inside the PDF file. Import support for stand-alone FDF files is implemented in Adobe Reader; export and import support (including saving of FDF data in PDF) is for example implemented in Foxit Reader and PDF-XChange Viewer Free; saving of FDF data in a PDF file is also supported in pdftk.</p>
        <h5><span id="XML_Forms_Data_Format_(XFDF)"></span><span  id="XML_Forms_Data_Format_.28XFDF.29">XML Forms Data Format (XFDF)</span><span ><span >[</span><a href="/w/index.php?title=Portable_Document_Format&amp;action=edit&amp;section=17" title="Edit section: XML Forms Data Format (XFDF)">edit</a><span >]</span></span></h5>
        <table  >
          <caption >XML Forms Data Format (XFDF)</caption>
          <tbody>
            <tr>
              <th scope="row" ><a href="/wiki/Filename_extension" title="Filename extension">Filename extension</a></th>
              <td ><code>.xfdf</code></td>
            </tr>
            <tr>
              <th scope="row" ><a href="/wiki/Media_type" title="Media type">Internet media&#160;type</a></th>
              <td ><code>application/vnd.adobe.xfdf<sup id="cite_ref-32" ><a href="#cite_note-32">[32]</a></sup></code></td>
            </tr>
            <tr>
              <th scope="row" ><a href="/wiki/Type_code" title="Type code">Type code</a></th>
              <td >'XFDF'</td>
            </tr>
            <tr>
              <th scope="row" >Developed&#160;by</th>
              <td ><a href="/wiki/Adobe_Systems" title="Adobe Systems">Adobe Systems</a></td>
            </tr>
            <tr>
              <th scope="row" >Initial release</th>
              <td >July&#160;2003<span >&#160;(<span >2003-07</span>)</span> (referenced in PDF 1.5)</td>
            </tr>
            <tr>
              <th scope="row" ><a href="/wiki/Software_release_life_cycle" title="Software release life cycle">Latest release</a></th>
              <td >
                <div >3.0<br />
                  <span >(August&#160;2009<span >; 8&#160;years ago</span><span >&#160;(<span >2009-08</span>)</span>)</span></div>
              </td>
            </tr>
            <tr>
              <th scope="row" >Extended&#160;from</th>
              <td >PDF, FDF, <a href="/wiki/XML" title="XML">XML</a></td>
            </tr>
            <tr>
              <th scope="row" ><a href="/wiki/International_standard" title="International standard">Standard</a></th>
              <td >ISO 19444-1<sup id="cite_ref-iso-xfdf_33-0" ><a href="#cite_note-iso-xfdf-33">[33]</a></sup>)</td>
            </tr>
            <tr>
              <th scope="row" >Website</th>
              <td ><a rel="nofollow"  href="https://partners.adobe.com/public/developer/en/xml/XFDF_Spec_3.0.pdf">XFDF 3.0 specification</a></td>
            </tr>
          </tbody>
        </table>
        <p>
          XML Forms Data Format (XFDF) is the XML version of Forms Data Format,
          but the XFDF implements only a subset of FDF containing forms and
          annotations. There are not XFDF equivalents for some entries in the
          FDF dictionary - such as the Status, Encoding, JavaScript, Pages keys,
          EmbeddedFDFs, Differences and Target. In addition, XFDF does not allow
          the spawning, or addition, of new pages based on the given data; as can be
          done when using an FDF file. The XFDF specification is referenced (but not
          included) in PDF 1.5 specification (and in later versions). It is
          described separately in XML Forms Data Format Specification. The
          PDF 1.4 specification allowed form submissions in XML format, but this was
          replaced by submissions in XFDF format in the PDF 1.5 specification. XFDF
          conforms to the XML
          {/* standard. */}
        </p>
      </div>
    );
  }
}

export default App;

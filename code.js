{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // script.js\
\
document.getElementById('generate-btn').addEventListener('click', () => \{\
  const name = document.getElementById('name').value;\
  const email = document.getElementById('email').value;\
  const phone = document.getElementById('phone').value;\
  const summary = document.getElementById('summary').value;\
  const education = document.getElementById('education').value;\
  const experience = document.getElementById('experience').value;\
  const skills = document.getElementById('skills').value;\
\
  // Creating the resume content\
  const resumeHTML = `\
    <h3>$\{name\}</h3>\
    <p><strong>Email:</strong> $\{email\}</p>\
    <p><strong>Phone:</strong> $\{phone\}</p>\
    <h4>Summary</h4>\
    <p>$\{summary\}</p>\
    <h4>Education</h4>\
    <p>$\{education\}</p>\
    <h4>Experience</h4>\
    <p>$\{experience\}</p>\
    <h4>Skills</h4>\
    <p>$\{skills\}</p>\
  `;\
\
  // Adding to the preview section\
  document.getElementById('resume-output').innerHTML = resumeHTML;\
\});\
}
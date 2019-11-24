#version 300 es

precision mediump float;

in vec3 ambient;
in vec3 diffuse;
in vec3 specular;

uniform vec3 material_color;    // Ka and Kd
uniform vec3 material_specular; // Ks

out vec4 FragColor;

void main() {
    FragColor = vec4(ambient, 1.0)*vec4(material_color, 1.0) + vec4(diffuse, 1.0)*vec4(material_color, 1.0) + vec4(specular, 1.0)*vec4(material_specular, 1.0);
}

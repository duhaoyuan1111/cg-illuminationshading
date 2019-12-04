#version 300 es

precision mediump float;

in vec3 frag_pos;
in vec3 frag_normal;

uniform vec3 light_ambient;
uniform vec3 light_position;
uniform vec3 light_color;
uniform vec3 camera_position;
uniform vec3 material_color;      // Ka and Kd
uniform vec3 material_specular;   // Ks
uniform float material_shininess; // n

out vec4 FragColor;

void main() {
	vec3 L = normalize(light_position-frag_pos);
	vec3 E = normalize(-frag_pos);
	vec3 R = normalize(-reflect(L,frag_normal));
	vec3 ambient = light_ambient;
	vec3 diffuse = clamp(light_color*max(dot(frag_normal,light_position-frag_pos),0.0),0.0,1.0);
	vec3 specular = clamp(light_color*pow(max(dot(R,E),0.0),material_shininess),0.0,1.0);
	
    FragColor = vec4(ambient, 1.0)*vec4(material_color, 1.0) + vec4(diffuse, 1.0)*vec4(material_color, 1.0) + vec4(specular, 1.0)*vec4(material_specular, 1.0);
	
}

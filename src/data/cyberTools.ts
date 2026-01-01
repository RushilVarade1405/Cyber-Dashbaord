export interface CyberTool {
  category: string;
  name: string;
  use: string;
  commands: string[];
}

export const cyberTools: CyberTool[] = [
  // ===============================
  // RECONNAISSANCE
  // ===============================
  {
    category: "Reconnaissance",
    name: "Nmap",
    use: "Network scanning and service discovery",
    commands: ["nmap target", "nmap -sV target", "nmap -A target"],
  },
  {
    category: "Reconnaissance",
    name: "Masscan",
    use: "High-speed port scanner",
    commands: ["masscan target -p1-65535"],
  },
  {
    category: "Reconnaissance",
    name: "Amass",
    use: "Subdomain enumeration and OSINT",
    commands: ["amass enum -d example.com"],
  },
  {
    category: "Reconnaissance",
    name: "theHarvester",
    use: "Gather emails and subdomains",
    commands: ["theHarvester -d example.com -b all"],
  },
  {
    category: "Reconnaissance",
    name: "WhatWeb",
    use: "Identify web technologies",
    commands: ["whatweb http://target"],
  },

  // ===============================
  // NETWORK ANALYSIS
  // ===============================
  {
    category: "Network Analysis",
    name: "Wireshark",
    use: "Analyze captured network traffic",
    commands: ["wireshark"],
  },
  {
    category: "Network Analysis",
    name: "Tcpdump",
    use: "Command-line packet capture",
    commands: ["tcpdump -i eth0"],
  },
  {
    category: "Network Analysis",
    name: "Netcat",
    use: "Network communication and backdoor tool",
    commands: ["nc -lvnp 4444", "nc target 80"],
  },
  {
    category: "Network Analysis",
    name: "Bettercap",
    use: "Network attacks and MITM framework",
    commands: ["bettercap -iface wlan0"],
  },

  // ===============================
  // WEB APPLICATION
  // ===============================
  {
    category: "Web Application",
    name: "Burp Suite",
    use: "Intercept and test web traffic",
    commands: ["burpsuite"],
  },
  {
    category: "Web Application",
    name: "OWASP ZAP",
    use: "Automated web vulnerability scanner",
    commands: ["zaproxy"],
  },
  {
    category: "Web Application",
    name: "SQLmap",
    use: "Automate SQL injection attacks",
    commands: ['sqlmap -u "http://target?id=1" --dbs'],
  },

  // ===============================
  // PASSWORD ATTACKS
  // ===============================
  {
    category: "Password Attacks",
    name: "Hydra",
    use: "Online password brute force",
    commands: ["hydra -l user -P pass.txt target ssh"],
  },
  {
    category: "Password Attacks",
    name: "John the Ripper",
    use: "Offline password cracking",
    commands: ["john hashes.txt"],
  },
  {
    category: "Password Attacks",
    name: "Hashcat",
    use: "High-speed password recovery",
    commands: ["hashcat -m 0 hashes.txt wordlist.txt"],
  },

  // ===============================
  // WIRELESS ATTACKS
  // ===============================
  {
    category: "Wireless",
    name: "Aircrack-ng",
    use: "Crack Wi-Fi passwords",
    commands: ["aircrack-ng capture.cap"],
  },
  {
    category: "Wireless",
    name: "Wifite",
    use: "Automated Wi-Fi attack tool",
    commands: ["wifite"],
  },

  // ===============================
  // EXPLOITATION
  // ===============================
  {
    category: "Exploitation",
    name: "Metasploit",
    use: "Exploit development and execution framework",
    commands: ["msfconsole"],
  },
  {
    category: "Exploitation",
    name: "Searchsploit",
    use: "Search local exploit database",
    commands: ["searchsploit apache"],
  },

  // ===============================
  // FORENSICS
  // ===============================
  {
    category: "Forensics",
    name: "Autopsy",
    use: "Digital forensic investigation platform",
    commands: ["autopsy"],
  },
  {
    category: "Forensics",
    name: "Volatility",
    use: "Memory forensics framework",
    commands: ["volatility -f memory.img imageinfo"],
  },

  // ===============================
  // OSINT
  // ===============================
  {
    category: "OSINT",
    name: "Maltego",
    use: "Open-source intelligence analysis",
    commands: ["maltego"],
  },
  {
    category: "OSINT",
    name: "Sherlock",
    use: "Find usernames across platforms",
    commands: ["sherlock username"],
  },

  // ===============================
  // HARDWARE TOOLS 🔥
  // ===============================
  {
    category: "Hardware Tools",
    name: "WiFi Pineapple",
    use: "Wireless auditing and man-in-the-middle attacks",
    commands: ["Web UI based configuration"],
  },
  {
    category: "Hardware Tools",
    name: "USB Rubber Ducky",
    use: "Keystroke injection attacks via USB",
    commands: ["Ducky Script payloads"],
  },
  {
    category: "Hardware Tools",
    name: "Bash Bunny",
    use: "Multi-function USB attack platform",
    commands: ["Payload switch-based execution"],
  },
  {
    category: "Hardware Tools",
    name: "HackRF One",
    use: "Software Defined Radio for RF attacks",
    commands: ["hackrf_info", "hackrf_transfer"],
  },
  {
    category: "Hardware Tools",
    name: "Alfa Network Adapter",
    use: "Packet injection and Wi-Fi monitoring",
    commands: ["airmon-ng start wlan0"],
  },
  {
    category: "Hardware Tools",
    name: "Raspberry Pi",
    use: "Portable penetration testing and monitoring device",
    commands: ["Kali Linux based tools"],
  },
];

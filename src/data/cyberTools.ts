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
  {
    category: "Network Analysis",
    name: "Ettercap",
    use: "Man-in-the-middle attack tool",
    commands: ["ettercap -G"],
  },

  // ===============================
  // WEB APPLICATION TESTING
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
    name: "Nikto",
    use: "Scan web servers for vulnerabilities",
    commands: ["nikto -h http://target"],
  },
  {
    category: "Web Application",
    name: "Gobuster",
    use: "Directory and DNS brute forcing",
    commands: ["gobuster dir -u http://target -w wordlist.txt"],
  },
  {
    category: "Web Application",
    name: "Dirsearch",
    use: "Advanced web directory brute forcing",
    commands: ["dirsearch -u http://target"],
  },
  {
    category: "Web Application",
    name: "SQLmap",
    use: "Automate SQL injection attacks",
    commands: ["sqlmap -u \"http://target?id=1\" --dbs"],
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
    name: "Medusa",
    use: "Parallel login brute force tool",
    commands: ["medusa -h target -u user -P pass.txt -M ssh"],
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
  {
    category: "Password Attacks",
    name: "Crunch",
    use: "Generate custom wordlists",
    commands: ["crunch 6 8 abc123 -o wordlist.txt"],
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
    name: "Airmon-ng",
    use: "Enable monitor mode",
    commands: ["airmon-ng start wlan0"],
  },
  {
    category: "Wireless",
    name: "Airodump-ng",
    use: "Capture wireless packets",
    commands: ["airodump-ng wlan0mon"],
  },
  {
    category: "Wireless",
    name: "Reaver",
    use: "Attack WPS-enabled routers",
    commands: ["reaver -i wlan0mon -b BSSID -vv"],
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
  {
    category: "Exploitation",
    name: "BeEF",
    use: "Browser exploitation framework",
    commands: ["beef-xss"],
  },

  // ===============================
  // POST EXPLOITATION
  // ===============================
  {
    category: "Post Exploitation",
    name: "LinPEAS",
    use: "Linux privilege escalation enumeration",
    commands: ["./linpeas.sh"],
  },
  {
    category: "Post Exploitation",
    name: "WinPEAS",
    use: "Windows privilege escalation enumeration",
    commands: ["winpeas.exe"],
  },
  {
    category: "Post Exploitation",
    name: "BloodHound",
    use: "Active Directory attack path analysis",
    commands: ["bloodhound"],
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
    name: "Binwalk",
    use: "Analyze firmware images",
    commands: ["binwalk firmware.bin"],
  },
  {
    category: "Forensics",
    name: "Volatility",
    use: "Memory forensics framework",
    commands: ["volatility -f memory.img imageinfo"],
  },
  {
    category: "Forensics",
    name: "Foremost",
    use: "Recover deleted files",
    commands: ["foremost disk.img"],
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
  {
    category: "OSINT",
    name: "SpiderFoot",
    use: "Automated OSINT reconnaissance",
    commands: ["spiderfoot -l 127.0.0.1:5001"],
  },
];

export interface LinuxCommand {
  category: string;
  command: string;
  description: string;
  difficulty: "basic" | "intermediate" | "advanced";
  example?: string;
}

export const linuxCommands: LinuxCommand[] = [
  // ===============================
  // BASIC / CORE
  // ===============================
  { category: "Beginner", command: "ls", description: "List directory contents", difficulty: "basic", example: "ls" },
  { category: "Beginner", command: "pwd", description: "Print working directory", difficulty: "basic", example: "pwd" },
  { category: "Beginner", command: "cd", description: "Change directory", difficulty: "basic", example: "cd" },
  { category: "Beginner", command: "clear", description: "Clear terminal screen", difficulty: "basic", example: "clear" },
  { category: "Beginner", command: "history", description: "Show command history", difficulty: "basic", example: "history" },
  { category: "Beginner", command: "exit", description: "Exit shell", difficulty: "basic", example: "exit" },

  // ===============================
  // FILE & DIRECTORY
  // ===============================
  { category: "File & Directory", command: "touch", description: "Create empty file", difficulty: "basic", example: "touch" },
  { category: "File & Directory", command: "mkdir", description: "Create directory", difficulty: "basic", example: "mkdir" },
  { category: "File & Directory", command: "rmdir", description: "Remove empty directory", difficulty: "basic", example: "rmdir" },
  { category: "File & Directory", command: "rm", description: "Remove files or directories", difficulty: "basic", example: "rm" },
  { category: "File & Directory", command: "cp", description: "Copy files or directories", difficulty: "basic", example: "cp" },
  { category: "File & Directory", command: "mv", description: "Move or rename files", difficulty: "basic", example: "mv" },
  { category: "File & Directory", command: "cat", description: "Display file content", difficulty: "basic", example: "cat" },
  { category: "File & Directory", command: "less", description: "View file page by page", difficulty: "intermediate", example: "less" },
  { category: "File & Directory", command: "head", description: "Show first lines of file", difficulty: "basic", example: "head" },
  { category: "File & Directory", command: "tail", description: "Show last lines of file", difficulty: "basic", example: "tail" },
  { category: "File & Directory", command: "stat", description: "Display file metadata", difficulty: "intermediate", example: "stat" },
  { category: "File & Directory", command: "tree", description: "Show directory structure", difficulty: "intermediate", example: "tree" },

  // ===============================
  // PERMISSIONS & OWNERSHIP
  // ===============================
  { category: "Permissions", command: "chmod", description: "Change file permissions", difficulty: "intermediate", example: "chmod" },
  { category: "Permissions", command: "chown", description: "Change file owner", difficulty: "intermediate", example: "chown" },
  { category: "Permissions", command: "chgrp", description: "Change group ownership", difficulty: "intermediate", example: "chgrp" },
  { category: "Permissions", command: "umask", description: "Set default permissions", difficulty: "advanced", example: "umask" },
  { category: "Permissions", command: "getfacl", description: "Get ACL permissions", difficulty: "advanced", example: "getfacl" },
  { category: "Permissions", command: "setfacl", description: "Set ACL permissions", difficulty: "advanced", example: "setfacl" },

  // ===============================
  // USER MANAGEMENT
  // ===============================
  { category: "User Management", command: "whoami", description: "Show current user", difficulty: "basic", example: "whoami" },
  { category: "User Management", command: "id", description: "Show user identity", difficulty: "intermediate", example: "id" },
  { category: "User Management", command: "groups", description: "Show user groups", difficulty: "basic", example: "groups" },
  { category: "User Management", command: "useradd", description: "Create new user", difficulty: "advanced", example: "useradd" },
  { category: "User Management", command: "usermod", description: "Modify user account", difficulty: "advanced", example: "usermod" },
  { category: "User Management", command: "userdel", description: "Delete user", difficulty: "advanced", example: "userdel" },
  { category: "User Management", command: "passwd", description: "Change password", difficulty: "basic", example: "passwd" },
  { category: "User Management", command: "su", description: "Switch user", difficulty: "intermediate", example: "su" },
  { category: "User Management", command: "sudo", description: "Run as superuser", difficulty: "basic", example: "sudo" },

  // ===============================
  // PROCESS MANAGEMENT
  // ===============================
  { category: "Process Management", command: "ps", description: "Show running processes", difficulty: "basic", example: "ps" },
  { category: "Process Management", command: "top", description: "Live process monitor", difficulty: "basic", example: "top" },
  { category: "Process Management", command: "htop", description: "Advanced process viewer", difficulty: "advanced", example: "htop" },
  { category: "Process Management", command: "atop", description: "Advanced system monitor", difficulty: "advanced", example: "atop" },
  { category: "Process Management", command: "kill", description: "Kill process by PID", difficulty: "intermediate", example: "kill" },
  { category: "Process Management", command: "killall", description: "Kill process by name", difficulty: "intermediate", example: "killall" },
  { category: "Process Management", command: "nice", description: "Set process priority", difficulty: "advanced", example: "nice" },
  { category: "Process Management", command: "renice", description: "Change process priority", difficulty: "advanced", example: "renice" },
  { category: "Process Management", command: "jobs", description: "List background jobs", difficulty: "intermediate", example: "jobs" },
  { category: "Process Management", command: "bg", description: "Resume job in background", difficulty: "intermediate", example: "bg" },
  { category: "Process Management", command: "fg", description: "Resume job in foreground", difficulty: "intermediate", example: "fg" },

  // ===============================
  // SYSTEM INFORMATION
  // ===============================
  { category: "System Info", command: "uname", description: "System information", difficulty: "basic", example: "uname" },
  { category: "System Info", command: "hostname", description: "Show hostname", difficulty: "basic", example: "hostname" },
  { category: "System Info", command: "uptime", description: "System running time", difficulty: "basic", example: "uptime" },
  { category: "System Info", command: "date", description: "Show date and time", difficulty: "basic", example: "date" },
  { category: "System Info", command: "free", description: "Memory usage", difficulty: "basic", example: "free" },
  { category: "System Info", command: "df", description: "Disk usage", difficulty: "intermediate", example: "df" },
  { category: "System Info", command: "du", description: "Directory size", difficulty: "intermediate", example: "du" },
  { category: "System Info", command: "lsblk", description: "List block devices", difficulty: "intermediate", example: "lsblk" },

  // ===============================
  // NETWORKING
  // ===============================
  { category: "Networking", command: "ip", description: "Network configuration", difficulty: "intermediate", example: "ip" },
  { category: "Networking", command: "ss", description: "Socket statistics", difficulty: "intermediate", example: "ss" },
  { category: "Networking", command: "ping", description: "Check connectivity", difficulty: "basic", example: "ping" },
  { category: "Networking", command: "traceroute", description: "Trace network route", difficulty: "intermediate", example: "traceroute" },
  { category: "Networking", command: "netstat", description: "Network connections", difficulty: "intermediate", example: "netstat" },
  { category: "Networking", command: "arp", description: "View ARP table", difficulty: "advanced", example: "arp" },
  { category: "Networking", command: "route", description: "View routing table", difficulty: "advanced", example: "route" },
  { category: "Networking", command: "curl", description: "Transfer data from URL", difficulty: "basic", example: "curl" },
  { category: "Networking", command: "wget", description: "Download files", difficulty: "basic", example: "wget" },
  { category: "Networking", command: "ssh", description: "Secure remote login", difficulty: "intermediate", example: "ssh" },
  { category: "Networking", command: "scp", description: "Secure file copy", difficulty: "intermediate", example: "scp" },
  { category: "Networking", command: "rsync", description: "Sync files remotely", difficulty: "advanced", example: "rsync" },

  // ===============================
  // PACKAGE MANAGEMENT
  // ===============================
  { category: "Package Management", command: "apt update", description: "Update package list", difficulty: "basic", example: "apt update" },
  { category: "Package Management", command: "apt upgrade", description: "Upgrade packages", difficulty: "basic", example: "apt upgrade" },
  { category: "Package Management", command: "apt install", description: "Install package", difficulty: "basic", example: "apt install" },
  { category: "Package Management", command: "apt remove", description: "Remove package", difficulty: "basic", example: "apt remove" },
  { category: "Package Management", command: "apt autoremove", description: "Remove unused packages", difficulty: "intermediate", example: "apt autoremove" },

  // ===============================
  // TEXT PROCESSING
  // ===============================
  { category: "Text Processing", command: "grep", description: "Search text patterns", difficulty: "basic", example: "grep" },
  { category: "Text Processing", command: "awk", description: "Pattern scanning tool", difficulty: "advanced", example: "awk" },
  { category: "Text Processing", command: "sed", description: "Stream editor", difficulty: "advanced", example: "sed" },
  { category: "Text Processing", command: "sort", description: "Sort lines", difficulty: "basic", example: "sort" },
  { category: "Text Processing", command: "uniq", description: "Remove duplicate lines", difficulty: "basic", example: "uniq" },
  { category: "Text Processing", command: "cut", description: "Extract columns", difficulty: "intermediate", example: "cut" },
  { category: "Text Processing", command: "tr", description: "Translate characters", difficulty: "intermediate", example: "tr" },
  { category: "Text Processing", command: "wc", description: "Count lines/words", difficulty: "basic", example: "wc" },

  // ===============================
  // ARCHIVE & COMPRESSION
  // ===============================
  { category: "Compression", command: "tar", description: "Archive files", difficulty: "intermediate", example: "tar" },
  { category: "Compression", command: "zip", description: "Create zip archive", difficulty: "basic", example: "zip" },
  { category: "Compression", command: "unzip", description: "Extract zip archive", difficulty: "basic", example: "unzip" },
  { category: "Compression", command: "gzip", description: "Compress file", difficulty: "basic", example: "gzip" },
  { category: "Compression", command: "gunzip", description: "Decompress file", difficulty: "basic", example: "gunzip" },
  { category: "Compression", command: "xz", description: "High-ratio compression", difficulty: "advanced", example: "xz" },

  // ===============================
  // ADVANCED / SECURITY
  // ===============================
  { category: "Advanced", command: "nmap", description: "Network scanner", difficulty: "advanced", example: "nmap" },
  { category: "Advanced", command: "tcpdump", description: "Packet analyzer", difficulty: "advanced", example: "tcpdump" },
  { category: "Advanced", command: "lsof", description: "List open files", difficulty: "advanced", example: "lsof" },
  { category: "Advanced", command: "strace", description: "Trace system calls", difficulty: "advanced", example: "strace" },
  { category: "Advanced", command: "crontab", description: "Schedule jobs", difficulty: "advanced", example: "crontab" },
  { category: "Advanced", command: "systemctl", description: "Manage services", difficulty: "advanced", example: "systemctl" },
  { category: "Advanced", command: "journalctl", description: "View system logs", difficulty: "advanced", example: "journalctl" },
];

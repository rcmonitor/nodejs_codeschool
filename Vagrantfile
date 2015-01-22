Vagrant.configure("2") do |config|
  # ... (other config)

  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--cpuexecutioncap", "50"]
  end
end